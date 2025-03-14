// Define the type for a single notification
interface Notification {
    id: number;
    image: string;
    name: string;
    statement: string;
    hour: string;
  }
  
  // Create the notifications array with the defined type
  export const NotificationData: Notification[] = [
    {
      id: 1,
      image: "https://via.placeholder.com/40", // Placeholder image URL
      name: "John Doe",
      statement: "Your package has been picked up by the rider.",
      hour: "2 hours ago",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/40",
      name: "Jane Smith",
      statement: "Rider is on the way to deliver your package.",
      hour: "3 hours ago",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/40",
      name: "Alice Johnson",
      statement: "Your package has been delivered successfully.",
      hour: "5 hours ago",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/40",
      name: "Bob Brown",
      statement: "Rider has arrived at the pickup location.",
      hour: "6 hours ago",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/40",
      name: "Charlie Davis",
      statement: "Your package is out for delivery.",
      hour: "8 hours ago",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/40",
      name: "Eva Green",
      statement: "Rider is delayed due to traffic.",
      hour: "10 hours ago",
    },
    {
      id: 7,
      image: "https://via.placeholder.com/40",
      name: "Frank Wilson",
      statement: "Your package is ready for pickup.",
      hour: "12 hours ago",
    },
    {
      id: 8,
      image: "https://via.placeholder.com/40",
      name: "Grace Lee",
      statement: "Rider has completed the delivery.",
      hour: "1 day ago",
    },
    {
      id: 9,
      image: "https://via.placeholder.com/40",
      name: "Henry Clark",
      statement: "Your package is delayed due to weather conditions.",
      hour: "2 days ago",
    },
    {
      id: 10,
      image: "https://via.placeholder.com/40",
      name: "Ivy Adams",
      statement: "Rider has started the delivery process.",
      hour: "3 days ago",
    },
  ];