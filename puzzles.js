var movies = [ 
["the fox and the hound", "fox", "hound"], 
["the squid and the whale", "squid", "whale"], 
["the dark knight", "dark", "knight"], 
["the lord of the rings", "lord", "rings"], 
["The silence of the lambs", "silence", "lambs"], 
["The lion king", "lion", "king"], 
["a clockwork orange", "clockwork", "orange"], 
["taxi driver", "taxi", "driver"], 
["ant man", "ant", "man"], 
["snow white", "snow", "white"], 
["sunset boulevard", "sunset", "boulevard"], 
["the bicycle thief", "bicycle", "thief"], 
["man on wire", "man", "wire"], 
["how to train your dragon", "train", "dragon"], 
["the princess bride", "princess", "bride"], 
["yellow submarine", "yellow", "submarine"], 
["the nightmare before christmas", "nightmare", "christmas"], 
["a christmas story", "christmas"], 
["the muppets take manhattan", "muppets", "manhattan"], 
["the princess and the frog", "princess", "frog"], 
["from russia with love", "russia", "love"], 
["american graffiti", "american", "graffiti"], 
["groundhog day", "groundhog", "day"], 
["duck soup", "duck", "soup"], 
["the lego movie", "lego"], 
["the red shoes", "red", "shoes"], 
["city of god", "city", "god"], 
["the green mile", "green", "mile"], 
["sunset boulevard", "sunset", "boulevard"], 
["green book", "green", "book"], 
["full metal jacket", "metal", "jacket"], 
["taxi driver", "taxi", "driver"], 
["the elephant man", "elephant", "man"], 
["black panther", "black", "panther"], 
["baby driver", "baby", "driver"], 
["the karate kid", "karate", "kid"], 
["black swan", "black", "swan"], 
["beauty and the beast", "beauty", "beast"], 
["crouching tiger hidden dragon", "tiger", "dragon"], 
["the pink panther", "pink", "panther"], 
["pirates of the caribbean", "pirates", "caribbean"], 
["the jungle book", "jungle", "book"], 
["spider - man", "spider", "man"], 
["monsters university", "monsters", "university"], 
["man of steel", "man", "steel"], 
["men in black", "men", "black"], 
["night at the museum", "night", "museum"], 
["angels and demons", "angels", "demons"], 
["home alone", "home", "alone"], 
["the king's speech", "king", "speech"], 
["snow white", "snow", "white"], 
["happy feet", "happy", "feet"], 
["monsters vs. aliens", "monsters", "aliens"], 
["planet of the apes", "planet", "apes"], 
["rain man", "rain", "man"], 
["the maze runner", "maze", "runner"], 
["shakespeare in love", "shakespeare", "love"], 
["shutter island", "shutter", "island"], 
["the devil wears prada", "devil", "prada"] 
]; 
var books = [ 
["the grapes of wrath", "grapes", "wrath"], 
["to the lighthouse", "lighthouse"], 
["animal farm", "animal", "farm"], 
["lord of the flies", "lord", "flies"], 
["on the road", "road"], 
["heart of darkness", "heart", "darkness"], 
["to kill a mockingbird", "kill", "mockingbird"], 
["life of pi", "life", "pi"], 
["white teeth", "white", "teeth"], 
["the kite runner", "kite", "runner"], 
["cloud atlas", "cloud", "atlas"], 
["the book thief", "book", "thief"], 
["the girl with the dragon tattoo", "girl", "dragon", "tattoo"], 
["a wrinkle in time", "wrinkle", "time"], 
["rabbit, run", "rabbit", "run"], 
["charlie and the chocolate factory", "charlie", "chocolate", "factory"], 
["cat's cradle", "cat", "cradle"], 
["of mice and men", "mice", "men"], 
["the golden compass", "golden", "compass"], 
["the wind in the willows", "wind", "willows"], 
["in cold blood", "cold", "blood"], 
["a tree grows in brooklyn", "tree", "brooklyn"], 
["the scarlet letter", "scarlet", "letter"], 
["water for elephants", "water", "elephants"], 
["out of africa", "africa"], 
["flowers in the attic", "flowers", "attic"], 
["the cat in the hat", "cat", "hat"], 
["the bell jar", "bell", "jar"], 
["captain underpants", "captain", "underpants"], 
["the catcher in the rye", "catcher", "rye"], 
["flowers in the attic", "flowers", "attic"], 
["valley of the dolls", "valley", "dolls"], 
["the girl on the train", "girl", "train"], 
["a song of fire and ice", "song", "fire", "ice"], 
["little house on the prarie", "little", "house", "prarie"], 
["the magic school bus", "magic", "school", "bus"], 
["the dark tower", "dark", "tower"], 
["the book thief", "book", "thief"], 
["american gods", "american", "gods"], 
["the lightning thief", "lightning", "thief"], 
["the underground railroad", "underground", "railroad"], 
["the devil in the white city", "devil", "white", "city"], 
["the call of the wild", "call", "wild"], 
["treasure island", "treasure", "island"] 
]; 
var music = [ 
["light my fire", "light", "fire"], 
["american pie", "american", "pie"], 
["hotel california", "hotel", "california"], 
["when doves cry", "doves", "cry"], 
["moon dance", "moon", "dance"], 
["bridge over troubled water", "bridge", "troubled", "water"], 
["stairway to heaven", "stairway", "heaven"], 
["light my fire", "light", "fire"], 
["tangled up in blue", "tangled", "blue"], 
["life on mars?", "life", "mars"], 
["white christmas", "white", "christmas"], 
["candle in the wind", "candle", "wind"], 
["rock around the clock", "rock", "clock"], 
["eye of the tiger", "eye", "tiger"], 
["barbie girl", "barbie", "girl"], 
["ice ice baby", "ice", "ice", "baby"], 
["wild horses", "wild", "horses"], 
["werewolves of london", "werewolves", "london"], 
["behind blue eyes", "blue", "eyes"], 
["rock lobster", "rock", "lobster"], 
["no rain", "rain"], 
["on the road again", "road"], 
["poker face", "poker", "face"], 
["man on the moon", "man", "moon"], 
["welcome to the jungle", "jungle"], 
["brown eyed girl", "brown", "girl"], 
["red red wine", "red", "red", "wine"], 
["dancing in the dark", "dancing", "dark"], 
["highway to hell", "highway", "hell"], 
["purple rain", "purple", "rain"], 
["burning down the house", "burning", "house"], 
["sheep go to heaven", "sheep", "heaven"], 
["total eclipse of the heart", "eclipse", "heart"], 
["bat out of hell", "bat", "hell"], 
["goodbye yellow brick road", "yellow", "brick", "road"], 
["house of the rising sun", "house", "sun"], 
["strawberry fields forever", "strawberry", "fields"], 
["blue suede shoes", "blue", "suede", "shoes"], 
["iron butterfly", "iron", "butterfly"], 
["little black submarines", "black", "submarines"], 
["guns n' roses", "guns", "roses"], 
["imagine dragons", "imagine", "dragons"], 
["arctic monkeys", "arctic", "monkeys"], 
["the beach boys", "beach", "boys"], 
["three dog night", "dog", "night"], 
["talking heads", "talking", "heads"], 
["the velvet underground", "velvet", "underground"], 
["muddy waters", "muddy", "waters"] 
]; 
var phrases = [ 
["cash cow", "cash", "cow"], 
["spill the beans", "spill", "beans"], 
["don't rock the boat", "rock", "boat"], 
["burst your bubble", "burst", "bubble"], 
["burn that bridge", "burn", "bridge"], 
["my ears are burning", "ears", "burning"], 
["birds of a feather", "birds", "feather"], 
["egg on your face", "egg", "face"], 
["red hand-ed", "red", "hand"], 
["head over heels", "head", "heels"], 
["full of hot air", "hot", "air"], 
["steal my thunder", "thunder"], 
["set in stone", "stone"], 
["bigger fish to fry", "fish", "fry"], 
["raining cats and dogs", "raining", "cats", "dogs"], 
["too many cooks in the kitchen", "cooks", "kitchen"], 
["bad egg", "egg"], 
["play it by ear", "play", "ear"], 
["at the end of your rope", "rope"], 
["sweep you off your feet", "sweep", "feet"], 
["not the only fish in the sea", "fish", "sea"], 
["jump the gun", "jump", "gun"], 
["bull in a china shop", "bull", "china", "shop"], 
["all skin and bone", "skin", "bone"], 
["cat got your tongue", "cat", "tongue"], 
["two peas in a pod", "peas", "pod"], 
["once in a blue moon", "blue", "moon"], 
["close but no cigar", "cigar"], 
["teacher's pet", "teacher", "pet"], 
["puppy love", "puppy", "love"], 
["like watching paint dry", "paint", "dry"], 
["get cold feet", "cold", "feet"], 
["hit the nail on the head", "nail", "head"], 
["fly on the wall", "fly", "wall"], 
["water under the bridge", "water", "bridge"], 
["taking candy from a baby", "candy", "baby"], 
["when pigs fly", "pigs", "fly"], 
["all your eggs in one basket", "eggs", "basket"], 
["when in rome", "rome"], 
["apple of my eye", "apple", "eye"], 
["sweet tooth", "sweet", "tooth"], 
["dog and pony show", "dog", "pony"], 
["the graveyard shift", "graveyard"], 
["black sheep", "black", "sheep"], 
["wet blanket", "wet", "blanket"], 
["that rings a bell", "rings", "bell"], 
["fly off the handle", "fly", "handle"], 
["put the pedal to the metal", "pedal", "metal"], 
["like shooting fish in a barrel", "shooting", "fish", "barrel"], 
["frog in your throat", "frog", "throat"], 
["house of cards", "house", "cards"], 
["cat out of the bag", "cat", "bag"], 
["paint yourself into a corner", "paint", "corner"], 
["open a can of worms", "can", "worms"], 
["skeletons in the closet", "skeletons", "closet"], 
["comparing apples and oranges", "apples", "oranges"], 
["foot in the door", "foot", "door"], 
["foot in your mouth", "foot", "mouth"], 
["stop cold turkey", "cold", "turkey"], 
["big fish in a small pond", "big", "fish", "pond"], 
["where there's smoke there's fire", "smoke", "fire"], 
["not my cup of tea", "cup", "tea"], 
["deer in the headlights", "deer", "headlights"], 
["icing on the cake", "icing", "cake"], 
["on pins and needles", "pins", "needles"], 
["like a kid in a candy store", "kid", "candy", "store"], 
["get your feet wet", "feet", "wet"], 
["yellow belly", "yellow", "belly"], 
["as the crow flies", "crow", "flies"], 
["crocodile tears", "crocodile", "tears"], 
["butterflies in your stomach", "butterflies", "stomach"], 
["ants in your pants", "ants", "pants"], 
["green thumb", "green", "thumb"], 
["pull the wool over your eyes", "wool", "eyes"], 
["ball is in your court", "ball", "court"], 
["everything but the kitchen sink", "kitchen", "sink"], 
["costs an arm and a leg", "arm", "leg"], 
["needle in a haystack", "needle", "haystack"] 
]; 
