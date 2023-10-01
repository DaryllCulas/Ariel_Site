const survey = new Survey.Model(json);
survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
});

$("#surveyElement").Survey({ model: survey });
