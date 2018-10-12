var theobject = [
    {
    "id":"lol",
    "children":[
            {
                "id":"lol",
                "children":[
                        {
                            "id":"lol",
                            "children":[]
                        }
                    ]
            },
            {
                "id":"lol",
                "children":[]
            }
        ]
    },
    {
    "id":"lol",
    "children":[
            {
                "id":"lol",
                "children":[]
            }
        ]
    }
];

const makeId = (objArray) => {
  return objArray.map((obj, i) => {
    obj.id = Math.floor(Math.random() * 1234567890);

    if (obj.children.length) {
      obj.children =  makeId(obj.children);
    }
    return obj;
  });
}

console.log(JSON.stringify(makeId(theobject), null, 2));
