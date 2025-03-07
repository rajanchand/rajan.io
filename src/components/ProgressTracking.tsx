
import React from 'react';
import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, AlertCircle, Clock } from 'lucide-react';

const tasks = [
  { id: 1, title: "Project Overview Statement", progress: 75, status: "In Progress" },
  { id: 2, title: "Work Breakdown Structure", progress: 100, status: "Completed" },
  { id: 3, title: "Risk Register", progress: 60, status: "In Progress" },
  { id: 4, title: "Network Analysis", progress: 30, status: "At Risk" },
  { id: 5, title: "Monitoring Plan", progress: 10, status: "Not Started" },
  { id: 6, title: "Overall Management", progress: 0, status: "Not Started" },
  { id: 7, title: "Individual Reflective Report", progress: 0, status: "Not Started" },
];

const ProgressTracking = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "In Progress":
        return <Clock className="w-4 h-4 text-amber-500" />;
      case "At Risk":
        return <AlertCircle className="w-4 h-4 text-destructive" />;
      default:
        return <Clock className="w-4 h-4 text-muted-foreground" />;
    }
  };

  return (
    <section id="tasks" className="py-24 px-6">
      <div className="w-full max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
            Progress Tracking
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Monitor project completion
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Keep track of task progress to ensure your project stays on schedule.
            Identify bottlenecks early and redistribute tasks as needed.
          </p>
        </motion.div>
        
        <motion.div 
          className="glass-panel rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 p-3 border-b border-border/50">
            <div className="flex gap-1.5 ml-2">
              <div className="w-3 h-3 rounded-full bg-destructive/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
            </div>
            <div className="mx-auto text-xs text-muted-foreground font-medium">Task Progress Dashboard</div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-3 gap-4 mb-4 px-4 text-sm font-medium text-muted-foreground">
              <div>Task</div>
              <div>Progress</div>
              <div>Status</div>
            </div>
            
            <div className="space-y-4">
              {tasks.map((task, index) => (
                <motion.div 
                  key={task.id}
                  className="grid grid-cols-3 gap-4 items-center p-4 rounded-xl bg-white/50 border border-border/50"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">
                      {task.id}
                    </div>
                    <span className="font-medium">{task.title}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Progress value={task.progress} className="h-2" />
                    <span className="text-sm w-8">{task.progress}%</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {getStatusIcon(task.status)}
                    <span className="text-sm">{task.status}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-16 flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button className="apple-button bg-secondary text-secondary-foreground">
            Export Report
          </button>
          <button className="apple-button bg-primary text-white">
            Update Progress
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgressTracking;
