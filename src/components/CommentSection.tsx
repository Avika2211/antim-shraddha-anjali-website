
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Comment } from '@/types/Comment';
import { toast } from '@/hooks/use-toast';
import { MessageSquare, Send } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch comments from Supabase on component mount
  useEffect(() => {
    fetchComments();
    
    // Set up real-time subscription for new comments
    const channel = supabase
      .channel('public:comments')
      .on('postgres_changes', 
        { event: 'INSERT', schema: 'public', table: 'comments' }, 
        (payload) => {
          setComments(prevComments => [payload.new as Comment, ...prevComments]);
        })
      .subscribe();
      
    // Cleanup subscription on unmount
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchComments = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        throw error;
      }

      setComments(data || []);
    } catch (error) {
      console.error('Error fetching comments:', error);
      toast({
        title: "कमेंट्स लोड करने में समस्या",
        description: "कृपया पेज को रिफ्रेश करें",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      toast({
        title: "विवरण आवश्यक",
        description: "कृपया अपना नाम और संदेश दर्ज करें",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const newComment: Omit<Comment, 'id' | 'timestamp'> = {
      name: name.trim(),
      message: message.trim()
    };

    try {
      const { data, error } = await supabase
        .from('comments')
        .insert([newComment])
        .select();

      if (error) throw error;

      // If realtime subscription doesn't work, we manually add the comment
      if (!data || data.length === 0) {
        fetchComments();
      }

      setName('');
      setMessage('');

      toast({
        title: "श्रद्धांजलि भेजी गई",
        description: "आपकी श्रद्धांजलि सफलतापूर्वक पोस्ट की गई है",
      });
    } catch (error) {
      console.error('Error submitting comment:', error);
      toast({
        title: "कमेंट पोस्ट करने में समस्या",
        description: "कृपया थोड़ी देर बाद पुनः प्रयास करें",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <Card className="p-6 glass-card mb-8">
        <h3 className="text-xl font-medium mb-4 flex items-center">
          <MessageSquare className="mr-2 h-5 w-5" /> अपनी श्रद्धांजलि दें
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="आपका नाम"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white/50"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <Textarea
              placeholder="अपना संदेश लिखें..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-white/50 min-h-[100px]"
              disabled={isSubmitting}
            />
          </div>
          <Button 
            type="submit"
            className="w-full bg-petal hover:bg-petal-dark text-primary-foreground flex items-center justify-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="animate-pulse">भेज रहा है...</span>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" /> संदेश भेजें
              </>
            )}
          </Button>
        </form>
      </Card>

      {isLoading ? (
        <div className="text-center py-10">
          <div className="animate-pulse">कमेंट्स लोड हो रहे हैं...</div>
        </div>
      ) : comments.length > 0 ? (
        <div className="space-y-4 mb-8">
          <h3 className="text-xl font-medium">श्रद्धांजलियां ({comments.length})</h3>
          {comments.map((comment) => (
            <Card key={comment.id} className="p-4 glass-card">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium text-lg">{comment.name}</h4>
                  <span className="text-sm text-gray-500">{comment.timestamp || new Date(comment.created_at).toLocaleString('hi-IN')}</span>
                </div>
                <p className="text-gray-700 whitespace-pre-wrap">{comment.message}</p>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-10 text-gray-500">
          अभी तक कोई श्रद्धांजलि नहीं। पहली श्रद्धांजलि आप दें।
        </div>
      )}
    </div>
  );
};

export default CommentSection;
