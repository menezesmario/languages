<?php
/*
function bookAuthor(){
        echo "Shakespeare, William";
}


//Calling a Function

function listOfBooks(){
        echo "Hamlet\n";
        echo "Romeo and Juliet\n";
        
}

listOfBooks();


*/
//Passing Parameters
/*
function bookByAuthorYear($authorName, $year)
{
        echo $year;
        echo "\n";
        echo $authorName;
}

$year = "1910";
$authorName = "William Shakespeare";

bookByAuthorYear($authorName, $year);

*/
//Default Parameters
/*
function booksByAuthorYear($tempAuthorName, $tempYear = 1910){
        echo $tempYear;
        echo "\n";
        echo $tempAuthorName;
        echo "\n";

}

$year = 1920;
$authorName = "William Shakespeare";

booksByAuthorYear($authorName);

*/

//RETURNING VALUES
/*
function booksByAuthorYear($tempAuthorName, $tempYear = 1910)
{
        echo $tempYear;
        echo "\n";
        echo $tempAuthorName;
        echo "\n";
}


function getAuthor()
{
return "Charles Dickens";
}

getAuthor();

$year = 1920;
$authorName = getAuthor();

booksByAuthorYear($authorName, $year);
*/

function getAuthor(){
        echo "Charles Dickens";
}

$variableFunctionName = "getAuthor";

$variableFunctionName();
?>