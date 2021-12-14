
export default function Filter({tags, setTags}) {
  function handleClick(e) {
    if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'LI') return;
    const value = e.target.innerText;
    switch(e.target.dataset.type) {
      case 'role':
        setTags(tags => {
          return {
            ...tags,
            role: ''
          };
        });
        break;
      case 'level':
        setTags(tags => {
          return {
            ...tags,
            level: ''
          };
        });
        break;
      case 'lang':
        setTags(tags => {
          if (tags.languages.includes(value)) {
            const languages = [...tags.languages];
            console.log(languages);
            languages.splice(languages.findIndex(item => item === value), 1);
            console.log(languages);
            return {
              ...tags,
              languages: languages
            };
          }
          return tags;
        });
        break;
      case 'tool':
        setTags(tags => {
          if (tags.tools.includes(value)) {
            const tools = [...tags.tools];
            tools.splice(tools.findIndex(item => item === value ), 1);
            return {
              ...tags,
              tools: tools
            };
          }
          return tags;
        });
        break;
      default:
        setTags({
          role: '',
          level: '',
          tools: [],
          languages: []
        });
    }

  }
  
  let showFilter = false;
  if (tags.role || tags.level) {
    showFilter = true;
  }

  if (tags.tools.length > 0 || tags.languages.length > 0) {
    showFilter = true;
  }

  if (!showFilter) {
    return <div className='Filter-spacer'></div>
  }

  return (
    <section onClick={handleClick} className='Filter'>
      <ul class='Filter-labels'>
        {tags.role && <li className='Filter-label' data-type='role'>{tags.role}</li>}
        {tags.level && <li className='Filter-label' data-type='level'>{tags.level}</li>}
        {tags.languages.map(tag => <li className='Filter-label' data-type='lang'>{tag}</li>)}
        {tags.tools.map(tag => <li className='Filter-label' data-type='tool'>{tag}</li>)}
      </ul>
      <button className='Filter-button'>Clear</button>
    </section>
  );
}