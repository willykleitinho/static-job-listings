


/*
useful: i dont think so

const labels = {
  'Frontend': 1,
  'Senior': 2,
  'HTML': 3,
  'CSS': 4,
  'JavaScript': 5,
  'Fullstack': 6,
  'Midweight': 7,
  'Python': 8,
  'React': 9,
  'Junior': 10,
  'Sass': 11,
  'Ruby': 12,
  'Backend': 13,
  'RoR': 14,
  'Vue': 15,
  'Django': 16 
};
*/


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

  return (
    <div onClick={handleClick} className='Filter'>
      <ul class='Filter-labels'>
      {tags.role && <li className='Filter-label' data-type='role'>{tags.role}</li>}
      {tags.level && <li className='Filter-label' data-type='level'>{tags.level}</li>}
      {tags.languages.map(tag => <li className='Filter-label' data-type='lang'>{tag}</li>)}
      {tags.tools.map(tag => <li className='Filter-label' data-type='tool'>{tag}</li>)}
      </ul>
    <button className='Filter-button'>Clear</button>
    </div>
  );
}