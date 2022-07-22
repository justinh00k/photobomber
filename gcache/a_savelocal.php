<?php
set_time_limit(0);
ignore_user_abort(1);

$movies = array(
            array("the fox and the hound", "fox", "hound"),
            array("the squid and the whale", "squid", "whale"),
        /*  array("the beauty and the beast", "beauty", "beast"), */
            array("the dark knight", "dark", "knight"),
            array("the lord of the rings", "lord", "rings"),
        /*    array("The good, the bad and the ugly", "good", "bad", "ugly"), */
        /*    array("fight club", "fight", "club"), */
        /*  array("The empire strikes back", "empire", "strikes", "back"), */
            array("The squid and the whale", "squid", "whale"),
         /*   array("city of god", "city", "god"), */
            array("The silence of the lambs", "silence", "lambs"),
        /*  array("back to the future", "back", "future"), */
            array("The lion king", "lion", "king"),
            array("return of the jedi", "return", "jedi"),
            array("reservoir dogs", "reservoir", "dogs"),
            array("a clockwork orange", "clockwork", "orange"),
            array("taxi driver", "taxi", "driver"),
       /*     array("toy story", "toy", "story"), */ 
            array("on the waterfront", "waterfront"),
            array("star wars","star","wars"),
            array("ant man","ant","man"),
            array("a hard day's night","hard","day","night"),
            array("snow white","snow","white"),
            array("sunset boulevard","sunset","boulevard"),
            array("the bride of frankenstein","bride","frankenstein"),
            array("the bicycle thief","bicycle","thief"),
            array("man on wire","man","wire"),
            array("how to train your dragon","train","dragon"),
            array("the princess bride","princess","bride"),
            array("the iron giant","iron","giant"),
            array("yellow submarine","yellow","submarine"),
            array("the nightmare before christmas","nightmare","christmas"),
            array("a christmas story","christmas"),
            array("muppets in manhattan","muppets","manhattan"),
            array("the princess and the frog","princess","frog"),
            array("from russia with love","russia","love"),
            array("the big sleep","big","sleep"),
            array("the little mermaid","little","mermaid"),
            array("american graffiti","american","graffiti"),
            array("groundhog day","groundhog","day"),
            array("duck soup","duck","soup"),
            array("the lego movie","lego"),
            array("the red shoes","red","shoes"),
            array("iron man","iron","man") 
            
        );
        $books = array(
            array("the prince and the pauper", "prince", "pauper"),
         /* array("the sound and the fury", "sound", "fury"), */
            array("the grapes of wrath", "grapes", "wrath"),
            array("to the lighthouse", "lighthouse"),
          /*  array("invisible man", "invisible", "man"), */
            array("a passage to india", "passage", "india"),
            array("animal farm", "animal", "farm"),
            array("lord of the flies", "lord", "flies"),
            array("the sun also rises", "sun", "rises"),
            array("on the road", "road"),
       /*   array("the catcher in the rye", "catcher", "rye"),  */
            array("heart of darkness", "heart", "darkness"),
       /*   array("the call of the wild", "call", "wild"), */
            array("to kill a mockingbird", "kill", "mockingbird"),
            array("life of pi","life","pi"),
            array("white teeth","white","teeth"),
            array("the kite runner","kite","runner"),
            array("cloud atlas","cloud","atlas"),
            array("the book thief","book","thief"),
            array("the girl with the dragon tattoo","girl","dragon","tattoo"),
            array("breakfast of champions","breakfast","champions"),
            array("a wrinkle in time","wrinkle","time"),
            array("pale fire","pale","fire"),
            array("rabbit, run","rabbit","run"),
            array("charlie and the chocolate factory","charlie","chocolate","factory"),
            array("cat's cradle","cat","cradle"),
       /*   array("little women","little","women"), */
            array("of mice and men","mice","men"),
            array("the golden compass","golden","compass"),
            array("the wind in the willows","wind","willows"),
            array("in cold blood", "cold", "blood"),
            array("a tree grows in brooklyn","tree","brooklyn"),
            array("the scarlet letter","scarlet","letter"),
            array("water for elephants","water","elephants"),
            array("out of africa","africa"),
            array("the lion, the witch and the wardrobe","lion","witch","wardrobe"),
            array("flowers in the attic","flowers","attic"),
            array("the cat in the hat","cat","hat")
            );
            
  $music = array(
  
            array("light my fire", "light", "fire"),
            array("american pie", "american", "pie"),
            array("hotel california", "hotel", "california"),
            array("when doves cry", "doves", "cry"),
            array("moon dance", "moon", "dance"),
            array("bridge over troubled water", "bridge", "troubled", "water"),
            array("stairway to heaven", "stairway", "heaven"),
            array("light my fire", "light", "fire"),
        /*  array("dancing queen", "dancing", "queen"), */
        /*  array("god only knows", "god", "knows"), */
            array("the boxer", "boxer"),
            array("tangled up in blue", "tangled", "blue"),
            array("life on mars?", "life", "mars"),
            array("white christmas","white","christmas"),
            array("candle in the wind","candle","wind"),
            array("rock around the clock","rock","clock"),
            array("eye of the tiger","eye","tiger"),
            array("barbie girl","barbie","girl"),
            array("ice ice baby","ice","ice","baby"),
            array("wild horses","wild","horses"),
            array("werewolves of london","werewolves","london"),
            array("behind blue eyes","blue","eyes"),
            array("rock lobster","rock","lobster"),
            array("no rain","rain"),
            array("on the road again","road"),
            array("poker face","poker","face"),
            array("man on the moon","man","moon"),
            array("welcome to the jungle","jungle"),
            array("brown eyed girl","brown","girl"),
            array("walk like an egyptian","walk","egyptian"),
            array("red red wine","red","red","wine"),
            array("dancing in the dark","dancing","dark"),
            array("highway to hell","highway","hell"),
            array("purple rain","purple","rain"),
            array("burning down the house","burning","house"),
            array("sheep go to heaven","sheep","heaven"),
            array("total eclipse of the heart","eclipse","heart"),
            array("love shack","love","shack"),
            array("bat out of hell","bat","hell"),
            array("goodbye yellow brick road","yellow","brick","road"),
            array("house of the rising sun","house","sun"),
            array("strawberry fields forever","strawberry","fields"),
            array("blue suede shoes","blue","suede","shoes"),
            array("skinny love","skinny","love"),
            array("iron butterfly","iron","butterfly"),
            array("little black submarines","black","submarines")
            );
            
       /* PHRASES */
    $phrases = array(
            array("cash cow", "cash", "cow"),
        /*  array("clear the air", "clear", "air"), */
        /*  array("cold shoulder", "cold", "shoulder"), */
            array("spill the beans", "spill", "beans"),
         
            array("don't rock the boat", "rock", "boat"),
            array("burst your bubble", "burst", "bubble"),
            array("burn that bridge", "burn", "bridge"),
            array("my ears are burning", "ears", "burning"),
            array("couch potato", "couch", "potato"),
        /*    array("a shot in the dark", "shot", "dark") */
            array("birds of a feather","birds","feather"),
            array("egg on your face","egg","face"),
            array("red hand-ed","red","hand"),
            array("head over heels","head","heels"),
           
            array("full of hot air","hot","air"),
            array("steal my thunder","thunder"),
            array("set in stone","stone"),
            array("bigger fish to fry","fish","fry"),
       /*     array("hook, line and sinker","hook","line","sinker"), 
            array("up a creek without a paddle","creek","paddle"),
       /*   array("red letter day","red","letter","day"), */
            array("raining cats and dogs","raining","cats","dogs"),
            array("too many cooks in the kitchen","cooks","kitchen"),
            array("bad egg","egg"),
            array("play it by ear","play","ear"),
            array("at the end of your rope","rope"),
            array("a wolf in sheep's clothing","wolf","sheep","clothing"),
            array("sweep you off your feet","sweep","feet"),
            array("not the only fish in the sea","fish","sea"),
            array("jump the gun","jump","gun"),
            array("bull in a china shop","bull","china","shop"),
            array("all skin and bone","skin","bone"),
            array("cat got your tongue","cat","tongue"),
            array("two peas in a pod","peas","pod"),
            array("once in a blue moon","blue","moon"),
            array("close but no cigar","cigar"),
            array("teacher's pet","teacher","pet"),
            array("puppy love","puppy","love"),
            array("like watching paint dry","paint","dry"),
            array("get cold feet","cold","feet"),
            array("hit the nail on the head","nail","head"),
            array("tie the knot","tie","knot"),
            array("fly on the wall","fly","wall"),
            array("water under the bridge","water","bridge"),
            array("taking candy from a baby","candy","baby"),
            array("when pigs fly","pigs","fly"),
            array("all your eggs in one basket","eggs","basket"),
            array("when in rome","rome"),
            array("apple of my eye","apple","eye"),
            array("sweet tooth","sweet","tooth"),
            array("dog and pony show","dog","pony"),
            array("the graveyard shift","graveyard"),
            array("in a pickle","pickle"),
            array("black sheep","black","sheep"),
            array("early bird gets the worm","early","bird","warm"),
            array("wet blanket","wet","blanket"),
            array("that rings a bell","rings","bell"),
            array("fly off the handle","fly","handle"),
            array("put the pedal to the metal","pedal","metal"),
            array("like shooting fish in a barrel","shooting","fish","barrel"),
            array("frog in your throat","frog","throat"),
            array("house of cards","house","cards"),
            array("cat out of the bag","cat","bag"),
            array("paint yourself into a corner","paint","corner"),
            array("open a can of worms","can","worms"),
            array("skeletons in the closet","skeletons","closet"),
            array("burning a hole in your pocket","burning","hole","pocket"),
            array("comparing apples and oranges","apples","oranges"),
            array("foot in the door","foot","door"),
            array("fiddle while rome burns","fiddle","rome","burns"),
            array("foot in your mouth","foot","mouth"),
            array("stop cold turkey","cold","turkey"),
            array("big fish in a small pond","big","fish","pond"),
            array("where there's smoke there's fire","smoke","fire"),
         /* array("burning daylight","burning","daylight"),  */
            array("in the doghouse","doghouse"),
            array("not my cup of tea","cup","tea"),
            array("bring home the bacon","home","bacon"),
            array("deer in the headlights","deer","headlights"),
            array("icing on the cake","icing","cake"),
            array("on pins and needles","pins","needles"),
            array("like a kid in a candy store","kid","candy","store"),
            array("get your feet wet","feet","wet"),
            array("yellow belly","yellow","belly"),
            array("as the crow flies","crow","flies"),
            array("shoot the breeze","shoot","breeze"),
            array("crocodile tears","crocodile","tears"),
            array("butterflies in your stomach","butterflies","stomach"),
            array("ballpark figure","ballpark","figure"),
            array("ants in your pants","ants","pants"),
            array("green thumb","green","thumb"),
            array("pull the wool over your eyes","wool","eyes"),
            array("ball is in your court","ball","court"),
            array("everything but the kitchen sink","kitchen","sink"),
            array("costs an arm and a leg","arm","leg"),
            array("needle in a haystack","needle","haystack")
            
            
        );

$questions = array("movies" => $movies, "books" => $books, "music" => $music, "phrases" => $phrases);



function mycurl($query) {
    $ch = curl_init();
    
    curl_setopt ($ch, CURLOPT_URL, "https://www.googleapis.com/customsearch/v1?cx=009870341570243535207%3A_vsfzws2-li&key=AIzaSyARFvyfpV1v407q391DWROuZ1k1L91FApU&safe=medium&filter=1&imgSize=medium&imgType=photo&filetype=jpg&q=".urlencode($query));
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
      
     
      
      
    $decoded = json_decode($results,true);
  
     $dcount = count($decoded["items"]);
 
      $testarray = array();
      
    for($a = 0; $a<$dcount; $a++)
{

 array_push($testarray, $decoded["items"][$a]["pagemap"]["cse_image"][0]["src"]); 

}



    
    $current = file_put_contents_force(dirname(__FILE__).'/'.urlencode(str_replace("'", "", strtolower($question[$i]))).'.json', json_encode($testarray,JSON_UNESCAPED_SLASHES));

            echo dirname(__FILE__).'/'.urlencode(str_replace("'", "", strtolower($question[$i]))). '.json' . '<br>';
            
    
    }
    
    if ($runthru<$qcount)
     $filewrite = $filewrite . "], \r\n";
     else
     $filewrite = $filewrite . "] \r\n";
    
    }
    
    $filewrite = $filewrite . "]; \r\n";
    
    
}



if (file_put_contents('puzzles.js',$filewrite))
echo $filewrite;



?>