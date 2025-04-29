
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Comment } from '@/types/Comment';
import { toast } from '@/hooks/use-toast';
import { MessageSquare, Send } from 'lucide-react';

const STORAGE_KEY = 'shraddhanjaliComments';

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  // Load comments from localStorage on component mount
  useEffect(() => {
    const savedComments = localStorage.getItem(STORAGE_KEY);
    if (savedComments) {
      try {
        setComments(JSON.parse(savedComments));
      } catch (error) {
        console.error('Failed to parse saved comments', error);
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  // Save comments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));
  }, [comments]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      toast({
        title: "विवरण आवश्यक",
        description: "कृपया अपना नाम और संदेश दर्ज करें",
        variant: "destructive",
      });
      return;
    }

    const newComment: Comment = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      timestamp: new Date().toLocaleString('hi-IN')
    };

    setComments(prev => [newComment, ...prev]);
    setName('');
    setMessage('');

    toast({
      title: "श्रद्धांजलि भेजी गई",
      description: "आपकी श्रद्धांजलि सफलतापूर्वक पोस्ट की गई है",
    });
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
            />
          </div>
          <div>
            <Textarea
              placeholder="अपना संदेश लिखें..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-white/50 min-h-[100px]"
            />
          </div>
          <Button 
            type="submit"
            className="w-full bg-petal hover:bg-petal-dark text-primary-foreground flex items-center justify-center"
          >
            <Send className="mr-2 h-4 w-4" /> संदेश भेजें
          </Button>
        </form>
      </Card>

      {comments.length > 0 && (
        <div className="space-y-4 mb-8">
          <h3 className="text-xl font-medium">श्रद्धांजलियां ({comments.length})</h3>
          {comments.map((comment) => (
            <Card key={comment.id} className="p-4 glass-card">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium text-lg">{comment.name}</h4>
                  <span className="text-sm text-gray-500">{comment.timestamp}</span>
                </div>
                <p className="text-gray-700 whitespace-pre-wrap">{comment.message}</p>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentSection;
