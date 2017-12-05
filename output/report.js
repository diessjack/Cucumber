$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("featurefiles/dailyroutine.feature");
formatter.feature({
  "line": 1,
  "name": "Life of king",
  "description": "\r\nIn order to go office\r\nAs a working guy\r\nI want to wish people",
  "id": "life-of-king",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "I am a kingman",
  "description": "",
  "id": "life-of-king;i-am-a-kingman",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@tester"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "we work in \"\u003cweekday\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "we meet \"\u003cguy\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "we \"\u003cyesorno\u003e\" him",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "life-of-king;i-am-a-kingman;",
  "rows": [
    {
      "cells": [
        "weekday",
        "guy",
        "yesorno"
      ],
      "line": 17,
      "id": "life-of-king;i-am-a-kingman;;1"
    },
    {
      "cells": [
        "ten",
        "watchmen",
        "yes"
      ],
      "line": 18,
      "id": "life-of-king;i-am-a-kingman;;2"
    },
    {
      "cells": [
        "nine",
        "cabdriver",
        "no"
      ],
      "line": 19,
      "id": "life-of-king;i-am-a-kingman;;3"
    },
    {
      "cells": [
        "one",
        "homboo",
        "yes"
      ],
      "line": 20,
      "id": "life-of-king;i-am-a-kingman;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "I am a kingman",
  "description": "",
  "id": "life-of-king;i-am-a-kingman;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@tester"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "we work in \"ten\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "we meet \"watchmen\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "we \"yes\" him",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ten",
      "offset": 12
    }
  ],
  "location": "AtitutdeTest.we_work_in(String)"
});
formatter.result({
  "duration": 47197187,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "watchmen",
      "offset": 9
    }
  ],
  "location": "AtitutdeTest.we_meet_(String)"
});
formatter.result({
  "duration": 82012,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "yes",
      "offset": 4
    }
  ],
  "location": "AtitutdeTest.we_skipGreeting_him(String)"
});
formatter.result({
  "duration": 151250,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "I am a kingman",
  "description": "",
  "id": "life-of-king;i-am-a-kingman;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@tester"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "we work in \"nine\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "we meet \"cabdriver\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "we \"no\" him",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "nine",
      "offset": 12
    }
  ],
  "location": "AtitutdeTest.we_work_in(String)"
});
formatter.result({
  "duration": 152271,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cabdriver",
      "offset": 9
    }
  ],
  "location": "AtitutdeTest.we_meet_(String)"
});
formatter.result({
  "duration": 76391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "no",
      "offset": 4
    }
  ],
  "location": "AtitutdeTest.we_skipGreeting_him(String)"
});
formatter.result({
  "duration": 73581,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "I am a kingman",
  "description": "",
  "id": "life-of-king;i-am-a-kingman;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@tester"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "we work in \"one\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "we meet \"homboo\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "we \"yes\" him",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "one",
      "offset": 12
    }
  ],
  "location": "AtitutdeTest.we_work_in(String)"
});
formatter.result({
  "duration": 62339,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "homboo",
      "offset": 9
    }
  ],
  "location": "AtitutdeTest.we_meet_(String)"
});
formatter.result({
  "duration": 52887,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "yes",
      "offset": 4
    }
  ],
  "location": "AtitutdeTest.we_skipGreeting_him(String)"
});
formatter.result({
  "duration": 49054,
  "status": "passed"
});
});