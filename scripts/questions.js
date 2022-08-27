// База с вопросами. 
// Effects: 
// Pride, Gluttony, Fornication, Anger, Greed, Despondency, Envy (7)
questions = [
    // Гордыня
    {
        
        "question": "Достигнув чего-то, вы не останавливаетесь, а идёте дальше",
        "effect": {
            "pride": 10,
            "glut": 0, 
            "forn": 0,
            "anger": 0,
            "greed": 0,
            "desp": 0,
            "envy": 0
        }
    },
    {
        
        "question": "Вы считаете себя лучше других",
        "effect": {
            "pride": 10,
            "glut": 0, 
            "forn": 0,
            "anger": 0,
            "greed": 0,
            "desp": 0,
            "envy": 0
        }
    },
    {
        
        "question": "Вы наслаждались ошибками других",
        "effect": {
            "pride": 10,
            "glut": 0, 
            "forn": 0,
            "anger": 0,
            "greed": 0,
            "desp": 0,
            "envy": 0
        }
    },
    {
        
        "question": "Вы испытывали раздражение от ваших конкурентов",
        "effect": {
            "pride": 10,
            "glut": 0, 
            "forn": 0,
            "anger": 0,
            "greed": 0,
            "desp": 0,
            "envy": 0
        }
    },

    // Чревоугодие
    {
        "question": "Бывает, что вы едите, даже если не голодны",
        "effect": {
            "pride": 0,
            "glut": 10, 
            "forn": 0,
            "anger": 0,
            "greed": 0,
            "desp": 0,
            "envy": 0
        }
    },
    {
        "question": "Вы едите урывками, меокими порциями",
        "effect": {
            "pride": 0,
            "glut": 10, 
            "forn": 0,
            "anger": 0,
            "greed": 0,
            "desp": 0,
            "envy": 0
        }
    },
    {
        "question": "Вы не всегда управляете процессом приёма пищи",
        "effect": {
            "pride": 0,
            "glut": 10, 
            "forn": 0,
            "anger": 0,
            "greed": 0,
            "desp": 0,
            "envy": 0
        }
    },
    {
        "question": "Вы едите быстро",
        "effect": {
            "pride": 0,
            "glut": 10, 
            "forn": 0,
            "anger": 0,
            "greed": 0,
            "desp": 0,
            "envy": 0
        }
    },
    // Блуд
    {
        "question": "Вы представляли себе акт совокупления с человеком, с которыми не состояли в законном браке",
        "effect": {
            "pride": 0,
            "glut": 0, 
            "forn": 10,
            "anger": 0,
            "greed": 0,
            "desp": 0,
            "envy": 0
        }
    },
    {
        "question": "Вы вступали в половые отношения до брака",
        "effect": {
            "pride": 0,
            "glut": 0, 
            "forn": 10,
            "anger": 0,
            "greed": 0,
            "desp": 0,
            "envy": 0
        }
    },
    {
        "question": "Вы смотрели с вожделением на женщин/мужчин, с которыми не состояли в законном браке",
        "effect": {
            "pride": 0,
            "glut": 0, 
            "forn": 10,
            "anger": 0,
            "greed": 0,
            "desp": 0,
            "envy": 0
        }
    },
    {
        "question": "У вас было больше одного полового партнера",
        "effect": {
            "pride": 0,
            "glut": 0, 
            "forn": 10,
            "anger": 0,
            "greed": 0,
            "desp": 0,
            "envy": 0
        }
    },

    // Гнев 
    {
        "question": "Вы говорили плохо о своих знакомых",
        "effect": {
            "pride": 0,
            "glut": 0, 
            "forn": 0,
            "anger": 10,
            "greed": 0,
            "desp": 0,
            "envy": 0
        }
    },
    {
        "question": "Вы испытывали раздражение",
        "effect": {
            "pride": 0,
            "glut": 0, 
            "forn": 0,
            "anger": 10,
            "greed": 0,
            "desp": 0,
            "envy": 0
        }
    },
    {
        "question": "Вы осуждали окружающих",
        "effect": {
            "pride": 0,
            "glut": 0, 
            "forn": 0,
            "anger": 10,
            "greed": 0,
            "desp": 0,
            "envy": 0
        }
    },
    {
        "question": "Вы пытались вывести окружающих из состояния спокойствия",
        "effect": {
            "pride": 0,
            "glut": 0, 
            "forn": 0,
            "anger": 10,
            "greed": 0,
            "desp": 0,
            "envy": 0
        }
    },

    // Алчность 
    {
        "question": "Вы окружаете себя не необходимыми материальными вещами",
        "effect": {
            "pride": 0,
            "glut": 0, 
            "forn": 0,
            "anger": 0,
            "greed": 10,
            "desp": 0,
            "envy": 0
        }
    },
    {
        "question": "Вы стремитесь повысить своё материальное благосостояние",
        "effect": {
            "pride": 0,
            "glut": 0, 
            "forn": 0,
            "anger": 0,
            "greed": 10,
            "desp": 0,
            "envy": 0
        }
    },
    {
        "question": "Вы не даёте в долг, если боитесь, что человек его не вернёт",
        "effect": {
            "pride": 0,
            "glut": 0, 
            "forn": 0,
            "anger": 0,
            "greed": 10,
            "desp": 0,
            "envy": 0
        }
    },
    {
        "question": "Если у Вас появятся дополнительные деньги, вы не пожертвуете их церкви",
        "effect": {
            "pride": 0,
            "glut": 0, 
            "forn": 0,
            "anger": 0,
            "greed": 10,
            "desp": 0,
            "envy": 0
        }
    },

    // Уныние
    {
        "question": "Вы концентрируетесь на своих проблемах",
        "effect": {
            "pride": 0,
            "glut": 0, 
            "forn": 0,
            "anger": 0,
            "greed": 0,
            "desp": 10,
            "envy": 0
        }
    },
    {
        "question": "Вы теряли интерес к жизни",
        "effect": {
            "pride": 0,
            "glut": 0, 
            "forn": 0,
            "anger": 0,
            "greed": 0,
            "desp": 10,
            "envy": 0
        }
    },
    {
        "question": "Вы испытывали нежелание бороться со своими грехами и страстями",
        "effect": {
            "pride": 0,
            "glut": 0, 
            "forn": 0,
            "anger": 0,
            "greed": 0,
            "desp": 10,
            "envy": 0
        }
    },
    {
        "question": "Вы вставали позже 6 утра",
        "effect": {
            "pride": 0,
            "glut": 0, 
            "forn": 0,
            "anger": 0,
            "greed": 0,
            "desp": 10,
            "envy": 0
        }
    },
    // Зависть
    {
        "question": "Вы скорбили о достатке ближнего",
        "effect": {
            "pride": 0,
            "glut": 0, 
            "forn": 0,
            "anger": 0,
            "greed": 0,
            "desp": 0,
            "envy": 10
        }
    },
    {
        "question": "Вы желали того, что имеет ваш ближний, но не имеете вы",
        "effect": {
            "pride": 0,
            "glut": 0, 
            "forn": 0,
            "anger": 0,
            "greed": 0,
            "desp": 0,
            "envy": 10
        }
    },
    {
        "question": "Вы испытывали чувство ревности",
        "effect": {
            "pride": 0,
            "glut": 0, 
            "forn": 0,
            "anger": 0,
            "greed": 0,
            "desp": 0,
            "envy": 10
        }
    },
    {
        "question": "Вы испытывали чувство соперничества",
        "effect": {
            "pride": 0,
            "glut": 0, 
            "forn": 0,
            "anger": 0,
            "greed": 0,
            "desp": 0,
            "envy": 10
        }
    }
];
