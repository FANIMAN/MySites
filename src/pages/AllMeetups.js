import { useState, useEffect } from 'react';

import MeetupList from '../components/meetups/MeetupList';

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://images.unsplash.com/photo-1555597673-b21d5c935865?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2FyYXRlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id:'m3',
      title:'This Is Faniman',
      image:
        'https://images.unsplash.com/photo-1577998555981-6e798325914e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2FyYXRlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      address:'This Is Faniman ANd I am From Addis Ababa ',
      description:
        'This Is FAniman And I am From Addis Ababa Ins And U A'
    },
    {
      id:'m4',
      title:'This Is Daniman',
      image:
      'https://images.unsplash.com/photo-1526889588514-2e695856df85?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8a2FyYXRlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      address:'Bole Medhanialem',
      description:'This Is Faniman And I am From Addis BAB'
    },
    {
      id:'m3',
      title:'This Is Faniman',
      image:
      'https://images.unsplash.com/photo-1541836567455-2d41eb6dd9b4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGthcmF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      address:'This Is Faniman ANd I am From Addis Ababa ',
      description:
        'This Is FAniman And I am From Addis Ababa Ins And U A'
    },
    {
      id:'m4',
      title:'This Is Daniman',
      image:
      'https://images.unsplash.com/photo-1516684991026-4c3032a2b4fd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGthcmF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      address:'Bole Medhanialem',
      description:'This Is Faniman And I am From Addis BAB'
    }
  ];



  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://mysites-90eb7-default-rtdb.firebaseio.com/meetups.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
      {/* <MeetupList meetups={DUMMY_DATA}/> */}
    </section>
  );
}

export default AllMeetupsPage;
