  // Гордыня, Чревоугодие, Блуд, Гнев, Алчность, Уныние, Зависть (7)
    // Pride, Gluttony, Fornication, Anger, Greed, Despondency, Envy (7)
    // var max_econ, max_dipl, max_govt, max_scty; // Max possible scores
    // max_econ = max_dipl = max_govt = max_scty = 0;
    var max_pride, max_glut, max_forn, max_anger, max_greed, max_desp, max_envy;
    max_pride = max_glut = max_forn = max_anger = max_greed = max_desp = max_envy = 0;

    
    let pride_array = new Array(questions.length);
    let glut_array  = new Array(questions.length);
    let forn_array  = new Array(questions.length);
    let anger_array = new Array(questions.length);
    let greed_array = new Array(questions.length);
    let desp_array  = new Array(questions.length);
    let envy_array  = new Array(questions.length);



    var qn = 0; // Question number
    init_question();
    for (var i = 0; i < questions.length; i++) {
        max_pride   += Math.abs(questions[i].effect.pride)
        max_glut    += Math.abs(questions[i].effect.glut)
        max_forn    += Math.abs(questions[i].effect.forn)
        max_anger   += Math.abs(questions[i].effect.anger)
        max_greed   += Math.abs(questions[i].effect.greed)
        max_desp    += Math.abs(questions[i].effect.desp)
        max_envy    += Math.abs(questions[i].effect.envy)
    }
    function init_question() {
        document.getElementById("question-text").innerHTML = questions[qn].question;
        document.getElementById("question-number").innerHTML = (qn + 1) + " вопрос из " + (questions.length);
        if (qn == 0) {
            document.getElementById("back_button").style.display = 'none';
            document.getElementById("back_button_off").style.display = 'block';
        } else {
            document.getElementById("back_button").style.display = 'block';
            document.getElementById("back_button_off").style.display = 'none';
        }

    }

    function next_question(mult) {
        pride_array[qn]     = mult*questions[qn].effect.pride
        glut_array[qn]      = mult*questions[qn].effect.glut
        forn_array[qn]      = mult*questions[qn].effect.forn
        anger_array[qn]     = mult*questions[qn].effect.anger
        greed_array[qn]     = mult*questions[qn].effect.greed
        desp_array[qn]      = mult*questions[qn].effect.desp
        envy_array[qn]      = mult*questions[qn].effect.envy
        qn++;
        if (qn < questions.length) {
            init_question();
        } else {
            results();
        }
    }

    function prev_question() {
        if (qn == 0) {
            return;
        }
        qn--;
        init_question();
    }

    function calc_score(score,max) {
        return (100 * score / max).toFixed(0)
    }

    function results() {

        let final_pride     = pride_array.reduce((a, b) => a + b, 0)
        let final_glut      = glut_array.reduce((a, b) => a + b, 0)
        let final_forn      = forn_array.reduce((a, b) => a + b, 0)
        let final_anger     = anger_array.reduce((a, b) => a + b, 0)
        let final_greed     = greed_array.reduce((a, b) => a + b, 0)
        let final_desp      = desp_array.reduce((a, b) => a + b, 0)
        let final_envy      = envy_array.reduce((a, b) => a + b, 0)
        
        var results = `results.html`
            + `?pride=${calc_score(final_pride,max_pride)}`
            + `&glut=${calc_score(final_glut,max_glut)}`
            + `&forn=${calc_score(final_forn,max_forn)}`
            + `&anger=${calc_score(final_anger,max_anger)}`
            + `&greed=${calc_score(final_greed,max_greed)}`
            + `&desp=${calc_score(final_desp,max_desp)}`
            + `&envy=${calc_score(final_envy,max_envy)}`
        location.href = results
        console.log(results)

    }
