export default function MessageBubble({ message }) {
  return (
    <div className={`message-bubble ${message.sender}`}>
      <p>{message.text}</p>
    </div>
  );
}
