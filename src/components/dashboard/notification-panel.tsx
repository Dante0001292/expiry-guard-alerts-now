
import { Bell, X, Calendar, Clock, Tag, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface Notification {
  id: string;
  type: 'expirySoon' | 'expired' | 'lowStock' | 'priceUpdate';
  product: string;
  message: string;
  time: string;
  read: boolean;
}

const sampleNotifications: Notification[] = [
  {
    id: "1",
    type: "expirySoon",
    product: "Organic Milk",
    message: "24 units will expire in 5 days",
    time: "10 minutes ago",
    read: false
  },
  {
    id: "2",
    type: "lowStock",
    product: "Whole Wheat Bread",
    message: "Stock is running low (5 units remaining)",
    time: "1 hour ago",
    read: false
  },
  {
    id: "3",
    type: "expired",
    product: "Protein Bars",
    message: "12 units have expired",
    time: "2 hours ago",
    read: true
  },
  {
    id: "4",
    type: "priceUpdate",
    product: "Greek Yogurt",
    message: "Automatic 10% discount applied",
    time: "5 hours ago",
    read: true
  },
];

export function NotificationPanel() {
  const [notifications, setNotifications] = useState<Notification[]>(sampleNotifications);
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  
  useEffect(() => {
    setUnreadCount(notifications.filter(n => !n.read).length);
  }, [notifications]);
  
  const markAllAsRead = () => {
    setNotifications(prevNotifications => 
      prevNotifications.map(notification => ({
        ...notification,
        read: true
      }))
    );
  };
  
  const dismissNotification = (id: string) => {
    setNotifications(prevNotifications => 
      prevNotifications.filter(notification => notification.id !== id)
    );
  };
  
  // Helper to get the icon based on notification type
  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'expirySoon': return <Clock className="h-5 w-5 text-amber-500" />;
      case 'expired': return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case 'lowStock': return <Tag className="h-5 w-5 text-brand-purple" />;
      case 'priceUpdate': return <Calendar className="h-5 w-5 text-green-500" />;
    }
  };
  
  return (
    <div className="relative">
      <Button 
        variant="ghost" 
        size="icon" 
        className="relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Bell className="h-5 w-5" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white animate-pulse-soft">
            {unreadCount}
          </span>
        )}
      </Button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50 animate-fade-in">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <h3 className="font-semibold text-lg flex items-center">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </h3>
            {unreadCount > 0 && (
              <Button 
                variant="ghost" 
                size="sm"
                onClick={markAllAsRead}
                className="text-sm text-brand-purple hover:text-brand-purple/90"
              >
                Mark all as read
              </Button>
            )}
          </div>
          
          <div className="max-h-80 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="py-8 text-center text-gray-500">
                No new notifications
              </div>
            ) : (
              <ul>
                {notifications.map((notification) => (
                  <li 
                    key={notification.id} 
                    className={`p-4 border-b border-gray-100 flex items-start gap-3 ${
                      !notification.read ? 'bg-gray-50' : ''
                    }`}
                  >
                    <div className="flex-shrink-0 mt-1">
                      {getNotificationIcon(notification.type)}
                    </div>
                    
                    <div className="flex-grow min-w-0">
                      <p className="font-medium text-sm">{notification.product}</p>
                      <p className="text-sm text-gray-600">{notification.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>
                    
                    <button 
                      className="flex-shrink-0 text-gray-400 hover:text-gray-600" 
                      onClick={() => dismissNotification(notification.id)}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          <div className="p-3 text-center border-t border-gray-200">
            <Button variant="link" className="text-sm text-brand-purple hover:text-brand-purple/90">
              View all notifications
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
