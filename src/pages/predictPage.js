import React, { useState } from 'react';

function Autocomplete({ suggestions, onSelect }) {
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.trim() !== '') {
      const filtered = suggestions.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleItemClick = (value) => {
    setInputValue(value);
    setFilteredSuggestions([]);
    onSelect(value);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search..."
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-blue-500"
      />
      {filteredSuggestions.length > 0 && (
        <ul className="absolute z-10 top-full bg-white border border-gray-300 rounded-lg shadow-md w-full">
          {filteredSuggestions.map((item, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(item)}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function YourComponent() {
  
  const suggestions = [
    "Toy Story (1995)",
    "Jumanji (1995)",
    "Grumpier Old Men (1995)",
    "Waiting to Exhale (1995)",
    "007",
    "Decoy Bride, The (2011)",
    "Angels Crest (2011)",
    "Viva Riva! (2010)",
    "Citizen Gangster (2011)",
    "Last Play at Shea, The (2010)",
    "Dictator, The (2012)",
    "Largo Winch (Heir Apparent: Largo Winch, The) (2008)",
    "Men in Black III (M.III.B.) (M.I.B.³) (2012)",
    "Snow White and the Huntsman (2012)",
    "Sound of My Voice (2011)",
    "Steel Trap, The (1952)",
    "Chicken with Plums (Poulet aux prunes) (2011)",
    "Pirates! Band of Misfits, The (2012)",
    "Prometheus (2012)",
    "Pact, The (2012)",
    "Bernie (2011)",
    "Ten North Frederick (1958)",
    "3 A.M. (2001)",
    "Deadline - U.S.A. (1952)",
    "Inhale (2010)",
    "Take This Waltz (2011)",
    "Wanderlust (2012)",
    "Moonrise Kingdom (2012)",
    "Texas Killing Fields (2011)",
    "Superman vs. The Elite (2012)",
    "I Wish (Kiseki) (2011)",
    "Get the Gringo (2012)",
    "5 Days of War (2011)",
    "Life, Above All (2010)",
    "Exporting Raymond (2010)",
    "Appointment with Danger (1951)",
    "Cosmopolis  (2012)",
    "Thousand Words, A (2012)",
    "Safety Not Guaranteed (2012)",
    "Madagascar 3: Europe's Most Wanted (2012)",
    "Superman/Batman: Public Enemies (2009)",
    "Brave (2012)",
    "Alcina (2000)",
    "Bel Ami (2012)",
    "To Rome with Love (2012)",
    "Don't Drink the Water (1969)",
    "Abraham Lincoln: Vampire Hunter (2012)",
    "First Position (2011)",
    "Detention (2012)",
    "Confession (1937)",
    "Kind Lady (1935)",
    "Rock of Ages (2012)",
    "Seeking a Friend for the End of the World (2012)",
    "Presto (2008)",
    "Jack-Jack Attack (2005)",
    "Ted (2012)",
    "Magic Mike (2012)",
    "On the Road (2012)",
    "Amazing Spider-Man, The (2012)",
    "Ice Age 4: Continental Drift (2012)",
    "Beasts of the Southern Wild (2012)",
    "People Like Us (2012)",
    "Savages (2012)",
    "Mooz-lum (2011)",
    "Union, The (2011)",
    "Some Guy Who Kills People (2011)",
    "Watch, The (2012)",
    "2 Days in New York (2012)",
    "Cat in the Hat, The (1971)",
    "Killer Joe (2011)",
    "Being Flynn (2012)",
    "For the Birds (2000)",
    "Ruby Sparks (2012)",
    "Total Recall (2012)",
    "Angels' Share, The (2012)",
    "Neil Young Journeys (2012)",
    "Skyfall (2012)",
    "Campaign, The (2012)",
    "Brake (2012)",
    "Hope Springs (2012)",
    "Queen of Versailles, The (2012)",
    "ParaNorman (2012)",
    "Diary of a Wimpy Kid: Dog Days (2012)",
    "Hara-Kiri: Death of a Samurai (2011)",
    "Hit and Run (Hit & Run) (2012)",
    "Premium Rush (2012)",
    "Odd Life of Timothy Green, The (2012)",
    "Lawless (2012)",
    "Sleepwalk with Me (2012)",
    "Searching for Sugar Man (2012)",
    "Apparition, The (2012)",
    "Paradise Lost 3: Purgatory (2011)",
    "Bachelorette (2012)",
    "Words, The (2012)",
    "Pitch Perfect (2012)",
    "Samsara (2011)",
    "Looper (2012)",
    "Compliance (2012)",
    "House at the End of the Street (2012)",
    "End of Watch (2012)",
    "Perks of Being a Wallflower, The (2012)",
    "Butter (2011)",
    "Looper (2012)",
    "Taken 2 (2012)",
    "Frankenweenie (2012)",
    "Seven Psychopaths (2012)",
    "Argo (2012)",
    "Sinister (2012)",
    "Here Comes the Boom (2012)",
    "Alex Cross (2012)",
    "Cloud Atlas (2012)",
    "Paperboy, The (2012)",
    "Sessions, The (Surrogate, The) (2012)",
    "Chasing Mavericks (2012)",
    "Fun Size (2012)",
    "Silent Hill: Revelation 3D (2012)",
    "We Are Legion: The Story of the Hacktivists (2012)",
    "Wreck-It Ralph (2012)",
    "Man with the Iron Fists, The (2012)",
    "Flight (2012)",
    "Lincoln (2012)",
    "Nature Calls (2012)",
    "Starlet (2012)",
    "Silver Linings Playbook (2012)",
    "Life of Pi (2012)",
    "Rise of the Guardians (2012)",
    "Twilight Saga: Breaking Dawn - Part 2, The (2012)",
    "Anna Karenina (2012)",
    "Zero Dark Thirty (2012)",
    "Django Unchained (2012)",
    "Impossible, The (Imposible, Lo) (2012)",
    "This Is 40 (2012)",
    "Les Misérables (2012)",
    "Amour (2012)",
    "Parental Guidance (2012)",
    "Guilt Trip, The (2012)",
    "Hobbit: An Unexpected Journey, The (2012)",
    "Jack Reacher (2012)",
    "Not Fade Away (2012)",
    "Cirque du Soleil: Worlds Away (2012)",
    "Impossible, The (Imposible, Lo) (2012)",
    "Promised Land (2012)",
    "Looper (2012)",
    "Great Gatsby, The (2013)",
    "Dredd (Dredd 3D) (2012)",
    "Cloud Atlas (2012)",
    "Barbara (2012)",
    "Teddy Bear (10 timer til Paradis) (2012)",
    "Dark Knight Rises, The (2012)",
    "Zero Dark Thirty (2012)",
    "Samsara (2011)",
    "Killing Them Softly (2012)",
    "Perks of Being a Wallflower, The (2012)",
    "Flight (2012)",
    "Django Unchained (2012)",
    "In the House (Dans la maison) (2012)",
    "Frankenweenie (2012)",
    "Bachelorette (2012)",
    "Promised Land (2012)",
    "Great Gatsby, The (2013)",
    "Star Trek Into Darkness (2013)",
    "Fast and the Furious 6, The (Fast Six) (2013)",
    "Now You See Me (2013)",
    "Internship, The (2013)",
    "After Earth (2013)",
    "This Is the End (2013)",
    "Man of Steel (2013)",
    "World War Z (2013)",
    "Monsters University (2013)",
    "Iceman (2013)",
    "Purge, The (2013)",
    "Lone Ranger, The (2013)",
    "Pacific Rim (2013)",
    "Despicable Me 2 (2013)",
    "Wolverine, The (2013)",
    "Elysium (2013)",
    "We're the Millers (2013)",
    "Red 2 (2013)",
    "2 Guns (2013)",
    "World's End, The (2013)",
    "Mortal Instruments: City of Bones, The (2013)",
    "In a World... (2013)",
    "You're Next (2011)",
    "Kick-Ass 2 (2013)",
    "Butler, The (2013)",
    "Getaway (2013)",
    "Short Term 12 (2013)",
    "Riddick (2013)",
    "Insidious: Chapter 2 (2013)",
    "Prisoners (2013)",
    "Battle of the Year: The Dream Team (2013)",
    "Rush (2013)",
    "Cloudy with a Chance of Meatballs 2 (2013)",
    "Baggage Claim (2013)",
    "Gravity (2013)",
    "Enough Said (2013)",
    "Metallica Through the Never (2013)",
    "Machete Kills (2013)",
    "Captain Phillips (2013)",
    "All Is Lost (2013)",
    "12 Years a Slave (2013)",
    "Escape Plan (2013)",
    "Carrie (2013)",
    "Incredible Burt Wonderstone, The (2013)",
    "Conjuring, The (2013)",
    "Frozen (2013)",
    "Thor: The Dark World (2013)",
    "Counselor, The (2013)",
    "Bad Grandpa (2013)",
    "Dallas Buyers Club (2013)",
    "Enders Game (2013)",
    "Hunger Games: Catching Fire, The (2013)",
    "Delivery Man (2013)",
    "Oldboy (2013)",
    "Homefront (2013)",
    "Frozen (2013)",
    "Book Thief, The (2013)",
    "Black Nativity (2013)",
    "Out of the Furnace (2013)",
    "Hobbit: The Desolation of Smaug, The (2013)",
    "Anchorman 2: The Legend Continues (2013)",
    "American Hustle (2013)",
    "Inside Llewyn Davis (2013)",
    "Her (2013)",
    "Saving Mr. Banks (2013)",
    "Wolf of Wall Street, The (2013)",
    "47 Ronin (2013)",
    "Secret Life of Walter Mitty, The (2013)",
    "Grudge Match (2013)",
    "August: Osage County (2013)",
    "Lone Survivor (2013)",
    "Labor Day (2013)",
    "I, Frankenstein (2014)",
    "That Awkward Moment (2014)",
    "Monuments Men, The (2014)",
    "Vampire Academy (2014)",
    "RoboCop (2014)",
    "Winter's Tale (2014)",
    "About Last Night (2014)",
    "Endless Love (2014)",
    "Rob the Mob (2014)",
    "Non-Stop (2014)",
    "Son of God (2014)",
    "Stalingrad (2013)",
    "3 Days to Kill (2014)",
    "Mr. Peabody & Sherman (2014)",
    "Grand Budapest Hotel, The (2014)",
    "300: Rise of an Empire (2014)",
    "Muppets Most Wanted (2014)",
    "Need for Speed (2014)",
    "Divergent (2014)",
    "Noah (2014)",
    "Sabotage (2014)",
    "Draft Day (2014)",
    "Captain America: The Winter Soldier (2014)",
    "Rio 2 (2014)",
    "Oculus (2013)",
    "Transcendence (2014)",
    "A Haunted House 2 (2014)",
    "Amazing Spider-Man 2, The (2014)",
    "Neighbors (2014)",
    "Chef (2014)",
    "Godzilla (2014)",
    "Million Dollar Arm (2014)",
    "X-Men: Days of Future Past (2014)",
    "Edge of Tomorrow (2014)",
    "Fault in Our Stars, The (2014)",
    "How to Train Your Dragon 2 (2014)",
    "22 Jump Street (2014)",
    "Think Like a Man Too (2014)",
    "Jersey Boys (2014)",
    "Transformers: Age of Extinction (2014)",
    "Tammy (2014)",
    "Dawn of the Planet of the Apes (2014)",
    "And So It Goes (2014)",
    "Hercules (2014)",
    "Lucy (2014)",
    "Step Up All In (2014)",
    "Guardians of the Galaxy (2014)",
    "Teenage Mutant Ninja Turtles (2014)",
    "Expendables 3, The (2014)",
    "If I Stay (2014)",
    "Sin City: A Dame to Kill For (2014)",
    "November Man, The (2014)",
    "No Good Deed (2014)",
    "Dolphin Tale 2 (2014)",
    "Walk Among the Tombstones, A (2014)",
    "This Is Where I Leave You (2014)",
    "Equalizer, The (2014)",
    "Maze Runner, The (2014)",
    "Gone Girl (2014)",
    "Addicted (2014)",
    "Fury (2014)",
    "Book of Life, The (2014)",
    "Dear White People (2014)",
    "Best of Me, The (2014)",
    "Birdman: Or (The Unexpected Virtue of Ignorance) (2014)",
    "Whiplash (2014)",
    "Interstellar (2014)",
    "Big Hero 6 (2014)",
    "Dumb and Dumber To (2014)",
    "Foxcatcher (2014)",
    "Hunger Games: Mockingjay - Part 1, The (2014)",
    "Penguins of Madagascar (2014)",
    "Horrible Bosses 2 (2014)",
    "Penguins of Madagascar (2014)",
    "Wild (2014)",
    "Top Five (2014)",
    "Exodus: Gods and Kings (2014)",
    "Annie (2014)",
    "Night at the Museum: Secret of the Tomb (2014)",
    "Imitation Game, The (2014)",
    "Hobbit: The Battle of the Five Armies, The (2014)",
    "Unbroken (2014)",
    "American Sniper (2014)",
    "Selma (2014)",
    "Into the Woods (2014)",
    "Woman in Black 2: Angel of Death, The (2015)",
    "Taken 3 (2015)",
    "Paddington (2014)",
    "Wedding Ringer, The (2015)",
    "American Sniper (2014)",
    "Blackhat (2015)",
    "Spare Parts (2015)",
    "Mortdecai (2015)",
    "Project Almanac (2015)",
    "Seventh Son (2014)",
    "Jupiter Ascending (2015)",
    "Kingsman: The Secret Service (2015)",
    "Fifty Shades of Grey (2015)",
    "McFarland, USA (2015)",
    "Hot Tub Time Machine 2 (2015)",
    "Focus (2015)",
    "Lazarus Effect, The (2015)",
    "Chappie (2015)",
    "Second Best Exotic Marigold Hotel, The (2015)",
    "Unfinished Business (2015)",
    "Cinderella (2015)",
    "Run All Night (2015)",
    "Divergent Series: Insurgent, The (2015)",
    "Get Hard (2015)",
    "Home (2015)",
    "Danny Collins (2015)",
    "While We're Young (2014)",
    "Furious 7 (2015)",
    "Woman in Gold (2015)",
    "Ex Machina (2015)",
    "Paul Blart: Mall Cop 2 (2015)",
    "Age of Adaline, The (2015)",
    "True Story (2015)",
    "Little Boy (2015)",
    "Avengers: Age of Ultron (2015)",
    "Hot Pursuit (2015)",
    "Mad Max: Fury Road (2015)",
    "Pitch Perfect 2 (2015)",
    "Tomorrowland (2015)",
    "Spy (2015)",
    "Entourage (2015)",
    "Insidious: Chapter 3 (2015)",
    "Jurassic World (2015)",
    "Love & Mercy (2014)",
    "Inside Out (2015)",
    "Dope (2015)",
    "Me and Earl and the Dying Girl (2015)",
    "Max (2015)",
    "Ted 2 (2015)",
    "Magic Mike XXL (2015)",
    "Terminator Genisys (2015)",
    "Amy (2015)",
    "Cartel Land (2015)",
    "Minions (2015)",
    "Ant-Man (2015)",
    "Trainwreck (2015)",
    "Southpaw (2015)",
    "Paper Towns (2015)",
    "Pixels (2015)",
    "Vacation (2015)",
    "Fantastic Four (2015)",
    "Ricki and the Flash (2015)",
    "Man from U.N.C.L.E., The (2015)",
    "Straight Outta Compton (2015)",
    "We Are Your Friends (2015)",
    "Transporter Refueled, The (2015)",
    "No Escape (2015)",
    "War Room (2015)",
    "The Visit (2015)",
    "Perfect Guy, The (2015)",
    "Maze Runner: The Scorch Trials (2015)",
    "Black Mass (2015)",
    "Everest (2015)",
    "Pawn Sacrifice (2015)",
    "Green Inferno, The (2013)",
    "Walk in the Woods, A (2015)",
    "Sicario (2015)",
    "Intern, The (2015)",
    "Martian, The (2015)",
    "Hotel Transylvania 2 (2015)",
    "Pan (2015)",
    "Steve Jobs (2015)",
    "Bridge of Spies (2015)",
    "Crimson Peak (2015)",
    "Goosebumps (2015)",
    "Room (2015)",
    "Jem and the Holograms (2015)",
    "Last Witch Hunter, The (2015)",
    "Paranormal Activity: The Ghost Dimension (2015)",
    "Suffragette (2015)",
    "Scouts Guide to the Zombie Apocalypse (2015)",
    "Our Brand Is Crisis (2015)",
    "Burnt (2015)",
    "Freaks of Nature (2015)",
    "In the Heart of the Sea (2015)",
    "Concussion (2015)",
    "Joy (2015)",
    "Big Short, The (2015)",
    "Point Break (2015)",
    "Hateful Eight, The (2015)",
    "Revenant, The (2015)",
    "Star Wars: Episode VII - The Force Awakens (2015)",
    "Daddy's Home (2015)",
    "Carol (2015)",
    "Legend (2015)",
    "Big Short, The (2015)",
    "Brooklyn (2015)",
    "The Danish Girl (2015)",
    "Room (2015)",
    "Trumbo (2015)",
    "45 Years (2015)",
    "Revenant, The (2015)",
    "Concussion (2015)",
    "Spotlight (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Trumbo (2015)",
    "45 Years (2015)",
    "Big Short, The (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Hateful Eight, The (2015)",
    "Bridge of Spies (2015)",
    "Danish Girl, The (2015)",
    "Mad Max: Fury Road (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Hateful Eight, The (2015)",
    "Bridge of Spies (2015)",
    "Danish Girl, The (2015)",
    "Mad Max: Fury Road (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)",
    "Danish Girl, The (2015)",
    "Room (2015)",
    "Spotlight (2015)",
    "Revenant, The (2015)",
    "Big Short, The (2015)",
    "Bridge of Spies (2015)",
    "Brooklyn (2015)",
    "Carol (2015)"]

  const handleSelect = (value) => {
    console.log('Selected:', value);
  
  };

  return (
    <div className="flex items-center justify-center min-h-300px">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 relative">
        <Autocomplete suggestions={suggestions} onSelect={handleSelect} />
        <button
          className="absolute top-1/2 transform -translate-y-1/2 right-0 px-3 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          <svg
            className="h-7 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M20 20l-5.6-5.6a7.5 7.5 0 10-1.4 1.4L20 20z"></path>
            <path d="M9 15a6 6 0 11 6-6 6 6 0 01-6 6z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default YourComponent;
