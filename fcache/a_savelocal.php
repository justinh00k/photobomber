<?php
set_time_limit(0);
ignore_user_abort(1);

// Puzzles 

/* 58 */
$movies = array(
    array("the fox and the hound", "fox", "hound"),
    array("the squid and the whale", "squid", "whale"),
    array("the dark knight", "dark", "knight"),
    array("the lord of the rings", "lord", "rings"),
    array("The silence of the lambs", "silence", "lambs"),
    array("The lion king", "lion", "king"),
    array("a clockwork orange", "clockwork", "orange"),
    array("taxi driver", "taxi", "driver"),
    array("ant man", "ant", "man"),
    array("snow white", "snow", "white"),
    array("sunset boulevard", "sunset", "boulevard"),
    array("the bicycle thief", "bicycle", "thief"),
    array("man on wire", "man", "wire"),
    array("how to train your dragon", "train", "dragon"),
    array("the princess bride", "princess", "bride"),
    array("yellow submarine", "yellow", "submarine"),
    array("the nightmare before christmas", "nightmare", "christmas"),
    array("a christmas story", "christmas"),
    array("the muppets take manhattan", "muppets", "manhattan"),
    array("the princess and the frog", "princess", "frog"),
    array("from russia with love", "russia", "love"),
    array("american graffiti", "american", "graffiti"),
    array("groundhog day", "groundhog", "day"),
    array("duck soup", "duck", "soup"),
    array("the lego movie", "lego"),
    array("the red shoes", "red", "shoes"),
    array("city of god", "city", "god"),
    array("the green mile", "green", "mile"),
    array("sunset boulevard", "sunset", "boulevard"),
    array("green book", "green", "book"),
    array("full metal jacket", "metal", "jacket"),
    array("taxi driver", "taxi", "driver"),
    array("the elephant man", "elephant", "man"),
    array("black panther", "black", "panther"),
    array("baby driver", "baby", "driver"),
    array("the karate kid", "karate", "kid"),
    array("black swan", "black", "swan"),
    array("beauty and the beast", "beauty", "beast"),
    array("crouching tiger hidden dragon", "tiger", "dragon"),
    array("the pink panther", "pink", "panther"),
    array("pirates of the caribbean", "pirates", "caribbean"),
    array("the jungle book", "jungle", "book"),
    array("spider - man", "spider", "man"),
    array("monsters university", "monsters", "university"),
    array("man of steel", "man", "steel"),
    array("men in black", "men", "black"),
    array("night at the museum", "night", "museum"),
    array("angels and demons", "angels", "demons"),
    array("home alone", "home", "alone"),
    array("the king's speech", "king", "speech"),
    array("snow white", "snow", "white"),
    array("happy feet", "happy", "feet"),
    array("monsters vs. aliens", "monsters", "aliens"),
    array("planet of the apes", "planet", "apes"),
    array("rain man", "rain", "man"),
    array("the maze runner", "maze", "runner"),
    array("shakespeare in love", "shakespeare", "love"),
    array("shutter island", "shutter", "island"),
    array("the devil wears prada", "devil", "prada")

);

/* 43 */
$books = array(

    array("the grapes of wrath", "grapes", "wrath"),
    array("to the lighthouse", "lighthouse"),
    array("animal farm", "animal", "farm"),
    array("lord of the flies", "lord", "flies"),
    array("on the road", "road"),
    array("heart of darkness", "heart", "darkness"),
    array("to kill a mockingbird", "kill", "mockingbird"),
    array("life of pi", "life", "pi"),
    array("white teeth", "white", "teeth"),
    array("the kite runner", "kite", "runner"),
    array("cloud atlas", "cloud", "atlas"),
    array("the book thief", "book", "thief"),
    array("the girl with the dragon tattoo", "girl", "dragon", "tattoo"),
    array("a wrinkle in time", "wrinkle", "time"),
    array("rabbit, run", "rabbit", "run"),
    array("charlie and the chocolate factory", "charlie", "chocolate", "factory"),
    array("cat's cradle", "cat", "cradle"),
    array("of mice and men", "mice", "men"),
    array("the golden compass", "golden", "compass"),
    array("the wind in the willows", "wind", "willows"),
    array("in cold blood", "cold", "blood"),
    array("a tree grows in brooklyn", "tree", "brooklyn"),
    array("the scarlet letter", "scarlet", "letter"),
    array("water for elephants", "water", "elephants"),
    array("out of africa", "africa"),
    array("flowers in the attic", "flowers", "attic"),
    array("the cat in the hat", "cat", "hat"),
    array("the bell jar", "bell", "jar"),
    array("captain underpants", "captain", "underpants"),
    array("the catcher in the rye", "catcher", "rye"),
    array("flowers in the attic", "flowers", "attic"),
    array("valley of the dolls", "valley", "dolls"),
    array("the girl on the train", "girl", "train"),
    array("a song of fire and ice", "song", "fire", "ice"),
    array("little house on the prarie", "little", "house", "prarie"),
    array("the magic school bus", "magic", "school", "bus"),
    array("the dark tower", "dark", "tower"),
    array("the book thief", "book", "thief"),
    array("american gods", "american", "gods"),
    array("the lightning thief", "lightning", "thief"),
    array("the underground railroad", "underground", "railroad"),
    array("the devil in the white city", "devil", "white", "city"),
    array("the call of the wild", "call", "wild"),
    array("treasure island", "treasure", "island")
);

/* 47 */
$music = array(
    array("light my fire", "light", "fire"),
    array("american pie", "american", "pie"),
    array("hotel california", "hotel", "california"),
    array("when doves cry", "doves", "cry"),
    array("moon dance", "moon", "dance"),
    array("bridge over troubled water", "bridge", "troubled", "water"),
    array("stairway to heaven", "stairway", "heaven"),
    array("light my fire", "light", "fire"),
    array("tangled up in blue", "tangled", "blue"),
    array("life on mars?", "life", "mars"),
    array("white christmas", "white", "christmas"),
    array("candle in the wind", "candle", "wind"),
    array("rock around the clock", "rock", "clock"),
    array("eye of the tiger", "eye", "tiger"),
    array("barbie girl", "barbie", "girl"),
    array("ice ice baby", "ice", "ice", "baby"),
    array("wild horses", "wild", "horses"),
    array("werewolves of london", "werewolves", "london"),
    array("behind blue eyes", "blue", "eyes"),
    array("rock lobster", "rock", "lobster"),
    array("no rain", "rain"),
    array("on the road again", "road"),
    array("poker face", "poker", "face"),
    array("man on the moon", "man", "moon"),
    array("welcome to the jungle", "jungle"),
    array("brown eyed girl", "brown", "girl"),
    array("red red wine", "red", "red", "wine"),
    array("dancing in the dark", "dancing", "dark"),
    array("highway to hell", "highway", "hell"),
    array("purple rain", "purple", "rain"),
    array("burning down the house", "burning", "house"),
    array("sheep go to heaven", "sheep", "heaven"),
    array("total eclipse of the heart", "eclipse", "heart"),
    array("bat out of hell", "bat", "hell"),
    array("goodbye yellow brick road", "yellow", "brick", "road"),
    array("house of the rising sun", "house", "sun"),
    array("strawberry fields forever", "strawberry", "fields"),
    array("blue suede shoes", "blue", "suede", "shoes"),
    array("iron butterfly", "iron", "butterfly"),
    array("little black submarines", "black", "submarines"),
    array("guns n' roses", "guns", "roses"),
    array("imagine dragons", "imagine", "dragons"),
    array("arctic monkeys", "arctic", "monkeys"),
    array("the beach boys", "beach", "boys"),
    array("three dog night", "dog", "night"),
    array("talking heads", "talking", "heads"),
    array("the velvet underground", "velvet", "underground"),
    array("muddy waters", "muddy", "waters")

);

/* 78 */
$phrases = array(
    array("cash cow", "cash", "cow"),
    array("spill the beans", "spill", "beans"),
    array("don't rock the boat", "rock", "boat"),
    array("burst your bubble", "burst", "bubble"),
    array("burn that bridge", "burn", "bridge"),
    array("my ears are burning", "ears", "burning"),
    array("birds of a feather", "birds", "feather"),
    array("egg on your face", "egg", "face"),
    array("red hand-ed", "red", "hand"),
    array("head over heels", "head", "heels"),
    array("full of hot air", "hot", "air"),
    array("steal my thunder", "thunder"),
    array("set in stone", "stone"),
    array("bigger fish to fry", "fish", "fry"),
    array("raining cats and dogs", "raining", "cats", "dogs"),
    array("too many cooks in the kitchen", "cooks", "kitchen"),
    array("bad egg", "egg"),
    array("play it by ear", "play", "ear"),
    array("at the end of your rope", "rope"),
    array("sweep you off your feet", "sweep", "feet"),
    array("not the only fish in the sea", "fish", "sea"),
    array("jump the gun", "jump", "gun"),
    array("bull in a china shop", "bull", "china", "shop"),
    array("all skin and bone", "skin", "bone"),
    array("cat got your tongue", "cat", "tongue"),
    array("two peas in a pod", "peas", "pod"),
    array("once in a blue moon", "blue", "moon"),
    array("close but no cigar", "cigar"),
    array("teacher's pet", "teacher", "pet"),
    array("puppy love", "puppy", "love"),
    array("like watching paint dry", "paint", "dry"),
    array("get cold feet", "cold", "feet"),
    array("hit the nail on the head", "nail", "head"),
    array("fly on the wall", "fly", "wall"),
    array("water under the bridge", "water", "bridge"),
    array("taking candy from a baby", "candy", "baby"),
    array("when pigs fly", "pigs", "fly"),
    array("all your eggs in one basket", "eggs", "basket"),
    array("when in rome", "rome"),
    array("apple of my eye", "apple", "eye"),
    array("sweet tooth", "sweet", "tooth"),
    array("dog and pony show", "dog", "pony"),
    array("the graveyard shift", "graveyard"),
    array("black sheep", "black", "sheep"),
    array("wet blanket", "wet", "blanket"),
    array("that rings a bell", "rings", "bell"),
    array("fly off the handle", "fly", "handle"),
    array("put the pedal to the metal", "pedal", "metal"),
    array("like shooting fish in a barrel", "shooting", "fish", "barrel"),
    array("frog in your throat", "frog", "throat"),
    array("house of cards", "house", "cards"),
    array("cat out of the bag", "cat", "bag"),
    array("paint yourself into a corner", "paint", "corner"),
    array("open a can of worms", "can", "worms"),
    array("skeletons in the closet", "skeletons", "closet"),
    array("comparing apples and oranges", "apples", "oranges"),
    array("foot in the door", "foot", "door"),
    array("foot in your mouth", "foot", "mouth"),
    array("stop cold turkey", "cold", "turkey"),
    array("big fish in a small pond", "big", "fish", "pond"),
    array("where there's smoke there's fire", "smoke", "fire"),
    array("not my cup of tea", "cup", "tea"),
    array("deer in the headlights", "deer", "headlights"),
    array("icing on the cake", "icing", "cake"),
    array("on pins and needles", "pins", "needles"),
    array("like a kid in a candy store", "kid", "candy", "store"),
    array("get your feet wet", "feet", "wet"),
    array("yellow belly", "yellow", "belly"),
    array("as the crow flies", "crow", "flies"),
    array("crocodile tears", "crocodile", "tears"),
    array("butterflies in your stomach", "butterflies", "stomach"),
    array("ants in your pants", "ants", "pants"),
    array("green thumb", "green", "thumb"),
    array("pull the wool over your eyes", "wool", "eyes"),
    array("ball is in your court", "ball", "court"),
    array("everything but the kitchen sink", "kitchen", "sink"),
    array("costs an arm and a leg", "arm", "leg"),
    array("needle in a haystack", "needle", "haystack")
);
$questions = array("movies" => $movies, "books" => $books, "music" => $music, "phrases" => $phrases);



function mycurl($query) {
    $ch = curl_init();
    
    curl_setopt ($ch, CURLOPT_URL, "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=946727a95ef1f767c5ac1d63610c1f8b&tag_mode=all&tags=".urlencode($query)."&text=".urlencode($query)."&sort=relevance&content_type=1&per_page=15&extras=owner_name&format=json&nojsoncallback=?");
    curl_setopt($ch, CURLOPT_TIMEOUT, 6);
    curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
    $results =curl_exec($ch);
    curl_close($ch);
    return $results;
}

function file_put_contents_force(){
    $args = func_get_args();
    $path = str_replace(array('/','\\'), DIRECTORY_SEPARATOR, $args[0]);
    $parts = explode(DIRECTORY_SEPARATOR, $path);
    array_pop($parts);
    $directory =  '';
    foreach($parts as $part):
        $check_path = $directory.$part;
            if( is_dir($check_path.DIRECTORY_SEPARATOR) === FALSE) {
                mkdir($check_path, 0755);
            }
            $directory = $check_path.DIRECTORY_SEPARATOR;
    endforeach;
    call_user_func_array('file_put_contents',$args);
}

$filewrite = "";

  
  
foreach($questions as $key => $category ) {
	
	$filewrite = $filewrite . "var " . $key . " = [ \r\n";
	
	$qcount = count($category); 
 
$runthru = 0;
    foreach($category as $question) {
    
    
     
  
    $filewrite = $filewrite . '["' . $question[0] . '"';
    $questioncount = count($question);
    $runthru++;
    
    for ($i = 1; $i < $questioncount; $i++)
    {
    
 
    
      $filewrite = $filewrite . ', "' . $question[$i] . '"';
      $results = mycurl($question[$i]);
    $decoded = json_decode($results);
    
    $current = file_put_contents_force(dirname(__FILE__).'/'.urlencode(str_replace("'", "", strtolower($question[$i]))).'.json', $results);

            echo dirname(__FILE__).'/'.urlencode(str_replace("'", "", strtolower($question[$i]))). '.json' . '<br>';
            
    
    }
    
    if ($runthru<$qcount)
     $filewrite = $filewrite . "], \r\n";
     else
     $filewrite = $filewrite . "] \r\n";
    
    }
    
    $filewrite = $filewrite . "]; \r\n";
    
    
}



if (file_put_contents('../puzzles.js',$filewrite))
echo $filewrite;



?>