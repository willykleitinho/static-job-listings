
/* 
  "id": 8,
  "company": "Insure",
  "logo": "./images/insure.svg",
  "new": false,
  "featured": false,
  "position": "Junior Frontend Developer",
  "role": "Frontend",
  "level": "Junior",
  "postedAt": "2w ago",
  "contract": "Full Time",
  "location": "USA Only",
  "languages": ["JavaScript"],
  "tools": ["Vue", "Sass"]
*/

import Label from './Label';

const spacer = '•';

export default function Listings({listings, setTags}) {
  return (
    <section>
      {listings.map(listing => <JobListing data={listing} key={listing.id} setTags={setTags} />)}
    </section>
  );
}


function JobListing({data, setTags}) {
  
  const {id, company, logo, new: isNew, featured: isFeatured, position, role,
    level, postedAt, contract, location, languages, tools} = data;

  return (
    <article data-id={id} className={(isFeatured) ? 'Listing featured' : 'Listing'}>
      <img src={logo} alt={company + ' logo.'} className='Listing-image' />
      <div className='container'>
        <p className='Listing-company'>
          {company}
          {isNew && <Label text='New!' classes='new' />}
          {isFeatured && <Label text='Featured' classes='featured' />}  
        </p>
        <p><a href='#' className='Listing-title'>{position}</a></p>
        <p className='Listing-info'>
          <span>{postedAt}</span>
          {spacer}
          <span>{contract}</span>
          {spacer}
          <span>{location}</span>
        </p>
      </div>
      <div>
        <Tags role={role} level={level} languages={languages} tools={tools} setTags={setTags} />
      </div>
    </article>
  );
}

function Tags({role, level, languages, tools, setTags}) {
  function handleClick(e) {
    if (e.target.tagName === 'UL') return;
    const value = e.target.innerText;
    switch(e.target.dataset.type) {
      case 'role':
        setTags(tags => {
          return {
            ...tags,
            role: value
          };
        });
        break;
      case 'level':
        setTags(tags => {
          return {
            ...tags,
            level: value
          };
        });
        break;
      case 'lang':
        setTags(tags => {
          if (tags.languages.includes(value)) {
            return tags;
          } else {
            return {
              ...tags,
              languages: [...tags.languages, value]
            };
          }
        });
        break;
      case 'tool':
        setTags(tags => {
          if (tags.tools.includes(value)) {
            return tags;
          } else {
            return {
              ...tags,
              tools: [...tags.tools, value]
            };
          }
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
      <ul className='Tags' onClick={handleClick}>
        <li data-type='role'>{role}</li>
        <li data-type='level'>{level}</li>
        {languages.map(tag => <li data-type='lang'>{tag}</li>)}
        {tools.map(tag => <li data-type='tool'>{tag}</li>)}
      </ul>
  );
}