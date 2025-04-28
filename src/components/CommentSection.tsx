
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Comment } from '@/types/Comment';

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      timestamp: new Date().toLocaleString('hi-IN')
    };

    setComments(prev => [newComment, ...prev]);
    setName('');
    setMessage('');
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <Card className="p-6 glass-card mb-8">
        <h3 className="text-xl font-medium mb-4">अपनी श्रद्धांजलि दें</h3>
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
            className="w-full bg-petal hover:bg-petal-dark text-primary-foreground"
          >
            संदेश भेजें
          </Button>
        </form>
      </Card>

      <div className="space-y-4">
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
    </div>
  );
};

export default CommentSection;
