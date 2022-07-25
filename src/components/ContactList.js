import ContactDetails from "../ContactDetails";

const contacts=[
    {
        name: 'Sara Sardar',
        avatar:'https://source.unsplash.com/ZHvM3XIOHoE/400x400',
    },
    {
        name: 'Sara Sardar',
        avatar:'https://source.unsplash.com/ZHvM3XIOHoE/400x400',
    },
    {
        name: 'Sara Sardar',
        avatar:'https://source.unsplash.com/ZHvM3XIOHoE/400x400',
    },
    {
        name: 'Sara Sardar',
        avatar:'https://source.unsplash.com/ZHvM3XIOHoE/400x400',
    },
    {
        name: 'Sara Sardar',
        avatar:'https://source.unsplash.com/ZHvM3XIOHoE/400x400',
    },
    {
        name: 'Sara Sardar',
        avatar:'https://source.unsplash.com/ZHvM3XIOHoE/400x400',
    },
    
]

export default function ContactList() {
  return (
    <ul>
        {contacts.map((contact)=>{
        return <ContactDetails name={contact.name} avatar={contact.avatar}/>;
    })}</ul>

    );
}
