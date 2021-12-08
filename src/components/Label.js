
export default function Label({text, classes}) {
  return (
    <span className={'Label ' + classes}>{text}</span>
  );
}