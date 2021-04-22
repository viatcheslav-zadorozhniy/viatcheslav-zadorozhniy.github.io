export default function CollapsibleList(props) {
  const listItems = props.items.map((item, index) => {
    const itemContent = item.href
      ? <a href={item.href} onClick={props.onItemClick}>{item.title}</a>
      : item.title;

    return <li key={item.href || index}>{itemContent}</li>
  });

  return (
    <details>
      <summary>{props.title}</summary>
      <ul>{listItems}</ul>
    </details>
  );
}
