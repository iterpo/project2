let option1text = `Υπολογισμός Εμβαδού Τριγώνου: Σε κάθε τρίγωνο μπορούμε να φέρουμε μια γραμμή που να ξεικινά από μια κορυφή και να τέμνει κάθετα την απέναντι πλευρά. Αυτή η γραμμή λέγεται ύψος του τριγώνου.Η πλευρά η οποία τέμνεται από το ύψος είναι η βάση του τριγώνου.
                    Το εμβαδόν του τριγώνου βρίσκεται αν πολλαπλασιάσεις τη βάση επί το ύψος και διαιρέσεις με το 2.`
let option2text = `Υπολογισμός Εμβαδού Τετράπλευρου: Ας θεωρήσουμε ένα πολύγωνο, για παράδειγμα ένα πεντάγωνο ΑΒΓΔΕ (σχ. 1). Το πολύγωνο μαζί με τα εσωτερικά του σημεία αποτελούν ένα χωρίο, που λέγεται πολυγωνικό χωρίο που ορίζεται από το ΑΒΓΔΕ.
Ένα πολυγωνικό χωρίο που ορίζεται από τρίγωνο, τετράπλευρο, ... , ν-γωνο λέγεται αντίστοιχα τριγωνικό, τετραπλευρικό, ... , ν-γωνικό<br><br><br><br>Πλευρές X, Y, Z, W και Γωνίες L και Μ`
let option3text = `Κυκλικός δίσκος λέγεται ο κύκλος μαζί με την επιφάνεια που κλείνει μέσα του. Για να βρούμε το εμβαδόν επιφάνειας του κυκλικού δίσκου χρησιμοποιούμε τον μαθηματικό τύπο : A=π·r2 Όπου, A (=area) το εμβαδόν του κύκλου,  r  η ακτίνα και π (μαθηματική σταθερά που ορίζεται ως ο λόγος της περιφέρειας προς τη διάμετρο ενός κύκλου και είναι με ακρίβεια οκτώ δεκαδικών ψηφίων ίσος με 3,14159265)<br>Τιμή Χ = ακτίνα`;
let option4text = `Σε ένα ορθογώνιο όλες οι εσωτερικές γωνίες είναι ορθές.
Σε κάθε ορθογώνιο οι διαγώνιοι είναι ίσες.
Κριτήρια ορθογωνίου: Ένα τετράπλευρο είναι ορθογώνιο αν ισχύει μία από τις παρακάτω προτάσεις:[1][2]
Είναι παραλληλόγραμμο με μία ορθή γωνία.
Είναι παραλληλόγραμμο με ίσες διαγωνίους.
Όλες οι γωνίες του είναι ορθές.`;
let option5text = `Το εμβαδόν ενός τριγώνου είναι το μισό από το εμβαδόν ενός παραλληλογράμμου με την ίδια βάση και το ίδιο ύψος Το εμβαδόν ενός ορθογωνίου ισούται με το γινόμενο δύο διαδοχικών πλευρών του. Το εμβαδόν ενός τετραγώνου ισούται με το γινόμενο δύο πλευρών του.`;
let optionDtext = `Ιστοσελίδα Μεθόδων Υπολογισμού φυσικών ποσοτήτων και μετατοπών των μονάδων μέτρησής τους. <br>
            Στον παρακάτων πίνακα επιλέξτε την μέθοδο που επιθυμείτε και συμπληρώστε τα πεδία με το πράσινο χρώμα<br> Έπειτα επιλέξτε το κουμπί Υπολογισμός`



function paragraphOption(option) {
    // paragraph writer
    let element = document.getElementById("functionOptionInform");
    switch (option) {
        case '1':
            element.innerHTML = option1text;
            break;
        case '2':
            element.innerHTML = option2text;
            break;
        case '3':
            element.innerHTML = option3text;
            break;
        case '4':
            element.innerHTML = option4text;
            break;
        case '5':
            element.innerHTML = option5text;
            break;
        default:
            element.innerHTML = optionDtext;
            break;
    }
}

function imageAdder(option) {
    // Image adder base on function selected

    switch (option) {
        case '1':
            img_html(option);
            break;
        case '2':
            img_html(option);
        case '3':
            img_html(option);
        default:
            img_html(option);
            break;
    }
}

function img_html(option) {
    let image_element = document.getElementById('image_selector')
    if (option != 0) {
        html_tag1 = `<img src="`;
        html_tag2 = `">`;
        html_full = html_tag1 + "assets/" + option + '.png' + html_tag2;
        image_element.innerHTML = html_full;
    }
    else {
        image_element.innerHTML = ''
    }
}

function enable_vars(list) {
    // 1 = ENABLED - 0 = DISABLED
    let vals = [inputX, inputY, inputZ, inputW, inputL, inputM]
    for (col in list) {
        if (list[col] == 1) {
            vals[col].disabled = false;
        } else {
            vals[col].disabled = true;
        }
    }
}


function greenBG(list) {
    // 1 = green -- 0 transparent
    let vals = [inputX, inputY, inputZ, inputW, inputL, inputM]
    for (col in list) {
        if (list[col] == 1) {
            vals[col].style.backgroundColor = "lightgreen";
        } else {
            vals[col].style.backgroundColor = "transparent";
        }
    }
}

