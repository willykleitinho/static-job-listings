
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

export default function Listings({listings}) {
  return (
    <section>
      {listings.map(listing => <JobListing data={listing} key={listing.id}/>)}
    </section>
  );
}


function JobListing({data}) {
  
  const {id, company, logo, new: isNew, featured: isFeatured, position, role,
    level, postedAt, contract, location, languages, tools} = data;
  
  const tags = [
  role,
  level,
  ...languages,
  ...tools
  ];

  return (
    <article data-id={id} className={(isFeatured) ? 'Listing featured' : 'Listing'}>
      <img src={logo} alt={company + 'logo.'} />
      <div>
        <p className='Listing-company'>
          {company}
          {isNew && <Label text='New!' classes='new' />}
          {isFeatured && <Label text='Featured' classes='featured' />}  
        </p>
        <p className='Listing-title'>{position}</p>
        <p className='Listing-info'>
          <span>{postedAt}</span>
          {spacer}
          <span>{contract}</span>
          {spacer}
          <span>{location}</span>
        </p>
      </div>
      <div>
        <Tags tags={tags} />
      </div>
    </article>
  );
}

function Tags({tags}) {
  function handleClick(e) {
    if (e.target.tagName === 'UL') return;
    console.log(e.target.innerText);
  }

  return (
    <ul className='Tags' onClick={handleClick}>
      {tags.map(tag => (<li>{tag}</li>))}
    </ul>
  );
}