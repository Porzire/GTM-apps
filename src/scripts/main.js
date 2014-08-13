// Default weights for importance attributes.
var fatal_w = 4;
var important_w = 2;
var normal_w = 1;
var negligible_w = 0.3;
var useless_w = 0;
var positive_w = 1;
var negative_w = -1;

// Stopwords.
var stopwords = {'a': true, 'a\'s': true, 'able': true, 'about': true, 'above': true, 'according': true, 'accordingly': true, 'across': true, 'actually': true, 'after': true, 'afterwards': true, 'again': true, 'against': true, 'ain\'t': true, 'all': true, 'allow': true, 'allows': true, 'almost': true, 'alone': true, 'along': true, 'already': true, 'also': true, 'although': true, 'always': true, 'am': true, 'among': true, 'amongst': true, 'an': true, 'and': true, 'another': true, 'any': true, 'anybody': true, 'anyhow': true, 'anyone': true, 'anything': true, 'anyway': true, 'anyways': true, 'anywhere': true, 'apart': true, 'appear': true, 'appreciate': true, 'appropriate': true, 'are': true, 'aren\'t': true, 'around': true, 'as': true, 'aside': true, 'ask': true, 'asking': true, 'associated': true, 'at': true, 'available': true, 'away': true, 'awfully': true, 'be': true, 'became': true, 'because': true, 'become': true, 'becomes': true, 'becoming': true, 'been': true, 'before': true, 'beforehand': true, 'behind': true, 'being': true, 'believe': true, 'below': true, 'beside': true, 'besides': true, 'best': true, 'better': true, 'between': true, 'beyond': true, 'both': true, 'brief': true, 'but': true, 'by': true, 'c\'mon': true, 'c\'s': true, 'came': true, 'can': true, 'can\'t': true, 'cannot': true, 'cant': true, 'cause': true, 'causes': true, 'certain': true, 'certainly': true, 'changes': true, 'clearly': true, 'co': true, 'com': true, 'come': true, 'comes': true, 'concerning': true, 'consequently': true, 'consider': true, 'considering': true, 'contain': true, 'containing': true, 'contains': true, 'corresponding': true, 'could': true, 'couldn\'t': true, 'course': true, 'currently': true, 'definitely': true, 'described': true, 'despite': true, 'did': true, 'didn\'t': true, 'different': true, 'do': true, 'does': true, 'doesn\'t': true, 'doing': true, 'don\'t': true, 'done': true, 'down': true, 'downwards': true, 'during': true, 'each': true, 'edu': true, 'eg': true, 'eight': true, 'either': true, 'else': true, 'elsewhere': true, 'enough': true, 'entirely': true, 'especially': true, 'et': true, 'etc': true, 'even': true, 'ever': true, 'every': true, 'everybody': true, 'everyone': true, 'everything': true, 'everywhere': true, 'ex': true, 'exactly': true, 'example': true, 'except': true, 'far': true, 'few': true, 'fifth': true, 'first': true, 'five': true, 'followed': true, 'following': true, 'follows': true, 'for': true, 'former': true, 'formerly': true, 'forth': true, 'four': true, 'from': true, 'further': true, 'furthermore': true, 'get': true, 'gets': true, 'getting': true, 'given': true, 'gives': true, 'go': true, 'goes': true, 'going': true, 'gone': true, 'got': true, 'gotten': true, 'greetings': true, 'had': true, 'hadn\'t': true, 'happens': true, 'hardly': true, 'has': true, 'hasn\'t': true, 'have': true, 'haven\'t': true, 'having': true, 'he': true, 'he\'s': true, 'hello': true, 'help': true, 'hence': true, 'her': true, 'here': true, 'here\'s': true, 'hereafter': true, 'hereby': true, 'herein': true, 'hereupon': true, 'hers': true, 'herself': true, 'hi': true, 'him': true, 'himself': true, 'his': true, 'hither': true, 'hopefully': true, 'how': true, 'howbeit': true, 'however': true, 'i\'d': true, 'i\'ll': true, 'i\'m': true, 'i\'ve': true, 'ie': true, 'if': true, 'ignored': true, 'immediate': true, 'in': true, 'inasmuch': true, 'inc': true, 'indeed': true, 'indicate': true, 'indicated': true, 'indicates': true, 'inner': true, 'insofar': true, 'instead': true, 'into': true, 'inward': true, 'is': true, 'isn\'t': true, 'it': true, 'it\'d': true, 'it\'ll': true, 'it\'s': true, 'its': true, 'itself': true, 'just': true, 'keep': true, 'keeps': true, 'kept': true, 'know': true, 'known': true, 'knows': true, 'last': true, 'lately': true, 'later': true, 'latter': true, 'latterly': true, 'least': true, 'less': true, 'lest': true, 'let': true, 'let\'s': true, 'like': true, 'liked': true, 'likely': true, 'little': true, 'look': true, 'looking': true, 'looks': true, 'ltd': true, 'mainly': true, 'many': true, 'may': true, 'maybe': true, 'me': true, 'mean': true, 'meanwhile': true, 'merely': true, 'might': true, 'more': true, 'moreover': true, 'most': true, 'mostly': true, 'much': true, 'must': true, 'my': true, 'myself': true, 'name': true, 'namely': true, 'nd': true, 'near': true, 'nearly': true, 'necessary': true, 'need': true, 'needs': true, 'neither': true, 'never': true, 'nevertheless': true, 'new': true, 'next': true, 'nine': true, 'no': true, 'nobody': true, 'non': true, 'none': true, 'noone': true, 'nor': true, 'normally': true, 'not': true, 'nothing': true, 'novel': true, 'now': true, 'nowhere': true, 'obviously': true, 'of': true, 'off': true, 'often': true, 'oh': true, 'ok': true, 'okay': true, 'old': true, 'on': true, 'once': true, 'one': true, 'ones': true, 'only': true, 'onto': true, 'or': true, 'other': true, 'others': true, 'otherwise': true, 'ought': true, 'our': true, 'ours': true, 'ourselves': true, 'out': true, 'outside': true, 'over': true, 'overall': true, 'own': true, 'particular': true, 'particularly': true, 'per': true, 'perhaps': true, 'placed': true, 'please': true, 'plus': true, 'possible': true, 'presumably': true, 'probably': true, 'provides': true, 'que': true, 'quite': true, 'qv': true, 'rather': true, 'rd': true, 're': true, 'really': true, 'reasonably': true, 'regarding': true, 'regardless': true, 'regards': true, 'relatively': true, 'respectively': true, 'right': true, 'said': true, 'same': true, 'saw': true, 'say': true, 'saying': true, 'says': true, 'second': true, 'secondly': true, 'see': true, 'seeing': true, 'seem': true, 'seemed': true, 'seeming': true, 'seems': true, 'seen': true, 'self': true, 'selves': true, 'sensible': true, 'sent': true, 'serious': true, 'seriously': true, 'seven': true, 'several': true, 'shall': true, 'she': true, 'should': true, 'shouldn\'t': true, 'since': true, 'six': true, 'so': true, 'some': true, 'somebody': true, 'somehow': true, 'someone': true, 'something': true, 'sometime': true, 'sometimes': true, 'somewhat': true, 'somewhere': true, 'soon': true, 'sorry': true, 'specified': true, 'specify': true, 'specifying': true, 'still': true, 'sub': true, 'such': true, 'sup': true, 'sure': true, 't\'s': true, 'take': true, 'taken': true, 'tell': true, 'tends': true, 'th': true, 'than': true, 'thank': true, 'thanks': true, 'thanx': true, 'that': true, 'that\'s': true, 'thats': true, 'the': true, 'their': true, 'theirs': true, 'them': true, 'themselves': true, 'then': true, 'thence': true, 'there': true, 'there\'s': true, 'thereafter': true, 'thereby': true, 'therefore': true, 'therein': true, 'theres': true, 'thereupon': true, 'these': true, 'they': true, 'they\'d': true, 'they\'ll': true, 'they\'re': true, 'they\'ve': true, 'think': true, 'third': true, 'this': true, 'thorough': true, 'thoroughly': true, 'those': true, 'though': true, 'three': true, 'through': true, 'throughout': true, 'thru': true, 'thus': true, 'to': true, 'together': true, 'too': true, 'took': true, 'toward': true, 'towards': true, 'tried': true, 'tries': true, 'truly': true, 'try': true, 'trying': true, 'twice': true, 'two': true, 'un': true, 'under': true, 'unfortunately': true, 'unless': true, 'unlikely': true, 'until': true, 'unto': true, 'up': true, 'upon': true, 'us': true, 'use': true, 'used': true, 'useful': true, 'uses': true, 'using': true, 'usually': true, 'value': true, 'various': true, 'very': true, 'via': true, 'viz': true, 'vs': true, 'want': true, 'wants': true, 'was': true, 'wasn\'t': true, 'way': true, 'we': true, 'we\'d': true, 'we\'ll': true, 'we\'re': true, 'we\'ve': true, 'welcome': true, 'well': true, 'went': true, 'were': true, 'weren\'t': true, 'what': true, 'what\'s': true, 'whatever': true, 'when': true, 'whence': true, 'whenever': true, 'where': true, 'where\'s': true, 'whereafter': true, 'whereas': true, 'whereby': true, 'wherein': true, 'whereupon': true, 'wherever': true, 'whether': true, 'which': true, 'while': true, 'whither': true, 'who': true, 'who\'s': true, 'whoever': true, 'whole': true, 'whom': true, 'whose': true, 'why': true, 'will': true, 'willing': true, 'wish': true, 'with': true, 'within': true, 'without': true, 'won\'t': true, 'wonder': true, 'would': true, 'wouldn\'t': true, 'yes': true, 'yet': true, 'you': true, 'you\'d': true, 'you\'ll': true, 'you\'re': true, 'you\'ve': true, 'your': true, 'yours': true, 'yourself': true, 'yourselves': true, 'zero': true};

var curr = null;

// The job description content.
var jd = '';
// The next unassigned CV index, starts from zero.
var cv_top = 0;
// The content of cvs.
var cvs = [];
// The md5 value for the previous request.
var pre_md5 = null;

/* Create a token DOM element.
 *
 * @param name        The name of the token.
 * @param importance  The importance attribute of the token, could be: 'fatal',
 *                    'important', 'normal', 'negligible', or 'useless'.
 * @param affect      The affect attribute of the token, could be: 'positive' or
 *                    'negative'.
 *
 * @return The token DOM element.
 */
var createToken = function(name, importance, affect) {
    return $(document.createElement('token'))
            .attr('importance', importance)
            .attr('affect', affect)
            .html(name)
            .bind('contextmenu', function(e){
                // Display the menu.
                var posx = e.clientX +window.pageXOffset +'px';
                var posy = e.clientY + window.pageYOffset + 'px';
                document.getElementById('contextmenu').style.position = 'absolute';
                document.getElementById('contextmenu').style.display = 'inline';
                document.getElementById('contextmenu').style.left = posx;
                document.getElementById('contextmenu').style.top = posy;           
                $('#contextmenu').find('span').hide();
                // Set flags to the selected features.
                $('#contextmenu').find('#' + $(this).attr('importance') + ' span').show();
                $('#contextmenu').find('#' + $(this).attr('affect') + ' span').show();
                // Update current token.
                $curr = $(this);
            });
};

/* Create result table DOM element.
 *
 * @param cvs   The curriculum vitaes' name and content array.
 * @param sims  The similarities array.
 *
 * @return The table DOM element.
 */
var createResult = function(cvs, sims) {
    $tbody = $(document.createElement('tbody'));
    $table = $(document.createElement('table')).addClass('table').append(
                   $(document.createElement('thead')).append(
                           $(document.createElement('tr')).append(
                                   $(document.createElement('th')).html('Rank'),
                                   $(document.createElement('th')).html('File Name'),
                                   $(document.createElement('th')).html('Similarity'))), $tbody);
    // Sort and store the ranking in the sims_rank.
    var sims_rank = [];
    for (var i = 0; i < sims.length; i++)
        sims_rank[i] = [i, sims[i]];
    for (var i = 0; i < sims_rank.length; i++) {
        var max = i;
        for (var j = i + 1; j < sims_rank.length; j++) {
            if (sims_rank[j][1] > sims_rank[max][1]) {
                max = j;
            }
        }
        if (max !== i) {
            var temp = sims_rank[i];
            sims_rank[i] = sims_rank[max];
            sims_rank[max] = temp;
        }
    }
    // Append sorted information into table.
    for (var i = 0; i < sims_rank.length; i++) {
        $tbody.append($(document.createElement('tr')).append(
                              $(document.createElement('td')).html(i + 1),
                              $(document.createElement('td')).html(cvs[sims_rank[i][0]][0]),
                              $(document.createElement('td')).html(sims_rank[i][1])));
    }
    return $table;
};

var resultToString = function(){
    var str = '';
    // $('#result-p th').each(function(){
    //     str += $(this).html() + '\t';
    // });
    // str += '\n';
    $('#result-p tbody tr').each(function(){
        $(this).children('td').each(function(){
            str += $(this).html() + '\t';
        });
        str += '\n';
    });
    return str;
};

/* Calculate the weight of the given.
 *
 * @param $token  The selector of the token to be calculated.
 *
 * @return The weight of the given token.
 */
var weight = function($token){
    var w = 1.0;
    switch ($token.attr('importance')) {
        case 'fatal':      w *= fatal_w;      break;
        case 'important':  w *= important_w;  break;
        case 'normal':     w *= normal_w;     break;
        case 'negligible': w *= negligible_w; break;
        case 'useless':    w *= useless_w;    break;
    }
    switch ($token.attr('affect')) {
        case 'positive':   w *= positive_w;   break;
        case 'negative':   w *= negative_w;   break;
    }
    return w;
};

var toHTML = function(content){
    var paras = content.split('\n');
    var display = '';
    for (var i in paras) {
        display += '<p>' + paras[i] + '</p>';
    }
    return display;
};

var compute = function(){
    if (jd.length === 0) {
        $('#result-p').html('Please enter and tokenize job description.');
        return;
    } else if (cvs.length === 0) {
        $('#result-p').html('Please select curriculum vitaes.');
        return;
    }
    // Get all the token information.
    var tokens = {};
    $('token').each(function(){
        var token = $(this).html();
        var curr_w = weight($(this));
        if (curr_w === 1 || curr_w === 0) {
            // Omit the normal and useless tokens.
        } else if (token in tokens) {
            // If different weight set to the same token, choose
            // the one with the largest distance to 1.
            var orig_w = tokens[token];
            var w = Math.abs(curr_w - 1) - Math.abs(orig_w - 1) > 0 ? curr_w : orig_w;
            tokens[token] = w;
        } else {
            tokens[token] = weight($(this));
        }
    });
    // Add 0 weight tokens to stop word map.
    for (var token in tokens)
        if (tokens[token] === 0)
            stopwords[token.toLowerCase()] = true;
    // Create comparsion text pairs.
    pairs = [];
    for (var index in cvs) {
        pairs[index] = [jd, cvs[index][1]];
    }
    var request = {
            'weights'   : tokens, 
            'stopwords' : Object.keys(stopwords),
            'pairs'     : pairs
    };
    var md5 = MD5(JSON.stringify(request));
    if (md5 !== pre_md5) {
        $('#result-p').html('waiting for response..');
        // Ajax call for similarities.
        $.ajax({
            type: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            dataType: 'json',
            crossDomain: true,
            url: 'http://jiemei.cs.dal.ca:8080/gtm-api/services/weighted',
            data: JSON.stringify(request),
            success: function(response) {
                $('#result-p').html(createResult(cvs, response['sims']));
                $('#download-btn').removeAttr('disabled');
            }
        });
    }
    pre_md5 = md5;
};

$(function(){

    /* Initialize setting menu.
     */
    // Initialize importance Panel.
    $('#fatal-in').val(fatal_w);
    $('#important-in').val(important_w);
    $('#normal-in').val(normal_w);
    $('#negligible-in').val(negligible_w);
    $('#useless-in').val(useless_w);
    // Initialize stopword Panel.
    var stopword_list = '';
    for (var stopword in stopwords)
        stopword_list += stopword + '\n';
    $('#stopword-ta').val(stopword_list);

    /**
     * Interval check.
     */
    setInterval(function(){
        if ($('#job-description-ta').val().length === 0) {
            $('#tokenize-btn').attr('disabled', 'disabled');
        } else {
            $('#tokenize-btn').removeAttr('disabled');
        }
    }, 200);

    /**
     * Bind setting buttons.
     */
    // Close button.
    $('#setting-close-btn').click(function(){
        // Reset importance Panel.
        $('#fatal-in').val(fatal_w);
        $('#important-in').val(important_w);
        $('#normal-in').val(normal_w);
        $('#negligible-in').val(negligible_w);
        $('#useless-in').val(useless_w);
        // Reset stopword Panel.
        var stopword_list = '';
        for (var stopword in stopwords)
            stopword_list += stopword + '\n';
        $('#stopword-ta').val(stopword_list);
    });
    // Save button.
    $('#setting-save-btn').click(function(){
        // Update weights.
        fatal_w = Number($('#fatal-in').val());
        important_w = Number($('#important-in').val());
        normal_w = Number($('#normal-in').val());
        negligible_w = Number($('#negligible-in').val());
        useless_w = Number($('#useless-in').val());
        // Update stopword.
        var list = $('#stopword-ta').val().split('\n');
        stopwords = {};
        for (var i = 0; i < list.length; i++)
            stopwords[list[i]] = true;
        // Update result.
        compute();
    });

    /**
     * Initialize context menu.
     */
    // Disable browser default context menu.
    document.oncontextmenu = function() {
        return false;
    }
    // Hide context menu on any left click.
    $('#wrapper').click(function(){
        document.getElementById('contextmenu').style.display = 'none'; 
    })
    // Context item click events.
    $('.contextitem').click(function(){
        var check = $(this).find('span');
        var id = $(this).attr('id');
        // Modify the tokens.
        if  (id == 'modify') {
            document.getElementById('contextmenu').style.display = 'none'; 
            // Modify $curr.
            var out = prompt("Modify the token:", $curr.html());
            if (out !== null) {
                var tokens = out.split(" ");
                for (var i = tokens.length - 1; i >= 0; i--) {
                    $curr.after(createToken(tokens[i], $curr.attr('importance'), $curr.attr('affect')));
                    if (i > 0)
                        $curr.after(' ');
                }
                $curr.remove();
            }
        // Check the hidden flag, and uncheck the other flags in the same category.
        } else if (!check.is(':visible')) {
            check.show();
            if (id == 'fatal' || id == 'important' || id == 'normal' || id == 'negligible' || id == 'useless') {
                $('#' + $curr.attr('importance')).find('span').hide();
                $curr.attr('importance', id);
            } else {
                $('#' + $curr.attr('affect')).find('span').hide();
                $curr.attr('affect', id);
            }
        }
    });

    /**
     * Read the content of job description file into textarea.
     */
    $('#job-description-fi').change(function(){
        var files = !!this.files ? this.files : [];
        if (!files.length) { return; }
        var reader = new FileReader();
        reader.readAsText(files[0]);
        reader.onloadend = function(evt) {
            if (evt.target.readyState = FileReader.DONE) {
                $('#job-description-ta').val(evt.target.result);
            }
        }
    });

    /**
     * Read the content of curriculum vitaes file into tab list.
     */
    $('#curriculum-vitaes-fi').on('change', function(){
        var files = !!this.files ? this.files : [];
        if (!files.length) { return; }
        var reader = new FileReader();
        reader.readAsText(files[0]);
        reader.onloadend = function(evt) {
            if (evt.target.readyState = FileReader.DONE) {
                // $('#cvs').append(createCV(files[0].name, evt.target.result));
                $('#cvs>.nav').find('li').removeClass('active');
                $('#cvs>.nav').append(
                        $(document.createElement('li')).addClass('active').append(
                                $(document.createElement('a')).attr('data-toggle', 'tab')
                                                              .attr('href', '#cv-' + cv_top)
                                                              .html(files[0].name)));
                $('#cvs>.tab-content').find('div').removeClass('in active');
                $('#cvs>.tab-content').append(
                        $(document.createElement('div')).addClass('tab-pane fade in active')
                                                        .attr('id', 'cv-' + cv_top)
                                                        .html(toHTML(evt.target.result)));
                cvs[cv_top] = [files[0].name, evt.target.result];
                cv_top += 1;
            }
        }
    });

    /* Tokenize button event.
     *
     * This button do the following:
     *     1. hide input areas.
     *     2. disable the tokenize function.
     *     3. tokenize the input by Penn Treebank Tokenizer.
     *     4. retrieve the stop words from the stop word textarea.
     *     5. assign attributes and create tokens.
     */
    $('#tokenize-btn').click(function(){
        jd = $('#job-description-ta').val();
        if (jd.length !== 0) {
            $(this).attr('disabled', 'disabled');
            $('#job-description-ta').hide();
            var tokens = treebankTokenizer(jd);
            $('#job-description-ta').val('');
            // Generate token attributes.
            for (var i = 0; i < tokens.length; i++)
                $('#tokens').append(createToken(tokens[i], (tokens[i].toLowerCase() in stopwords ? 'useless' : 'normal'), 'positive'))
                            .append(' ');
        } else {
            alert('Please input job description first.');
        }
    });

    $('#result-tab').click(function(){
        compute();
    });

    $('#download-btn').click(function(){
        var output = resultToString();
        var blob = new Blob([output], {type: "text/plain;charset=utf-8"});
        saveAs(blob, "result.txt");
    });
});
