function computeDepth3(elemIn)
{
    let elemStack = [];
    let recipeIdStack = [];
    let depthStack = [];

    elemStack.push(elemIn.text); // elements in recursion
    recipeIdStack.push(0); // next recipe to try for the corresponding element
    depthStack.push(0); // 0 for no children tried for current recipeId, otherwise length to left element of recipe

    let closed = new Set();


    for (const key of base) {
        visited[key]=[1,-Infinity];
        closed.add(key);
    }
    if (base.includes(elemIn.text)) {
        return 1;
    }

    if(elemIn.text in visited && (visited[elemIn.text][0]!=-Infinity))
      {
        return visited[elemIn.text][0]!=-Infinity?visited[elemIn.text][0]:visited[elemIn.text][1]
      }

     visited[elemIn.text]=[-Infinity,-Infinity];
     console.log("First enter:",elemIn);



  checkIAndJ:  while (elemStack.length > 0) {
         console.log("continue loop while")
        let stackLen = elemStack.length;
        const elem = elemStack[stackLen - 1];
        const recipeId = recipeIdStack[stackLen - 1];
        const depth = depthStack[stackLen - 1];
        const isInSave = elem in save["recipes"];
        const isClosed = closed.has(elem);
        let goneThroughAllRecipes = false;
  console.log("Elem in enter:",elem);
         if(base.includes(elem))
           {
             elemStack.pop();
             recipeIdStack.pop();
             continue checkIAndJ;
           }





        if(!isInSave)
          {
            visited[elem]=[-Infinity,1];
            bad.push(elem);
            closed.add(elem);
            elemStack.pop();
            recipeIdStack.pop();
            continue checkIAndJ;
          }

        if(recipeIdStack[stackLen - 1]>=save["recipes"][elem].length)
            {   console.log("no more recipes")
              if(visited[elem][1]<=-Infinity && visited[elem][0]<=-Infinity)
                { visited[elem]=[-Infinity,1];
                  bad.push(elem);
                }

              closed.add(elem);
              elemStack.pop();
              recipeIdStack.pop();
              continue checkIAndJ;

            }
          const recipe = save["recipes"][elem][recipeId];



        if (recipe[0].text === elem || recipe[1].text === elem) { // directly recursive recipe
            recipeIdStack[stackLen - 1] += 1;
            continue checkIAndJ;

        }
           console.log("Parents:",recipe[0].text,recipe[1].text,visited[recipe[0].text],visited[recipe[1].text],recipeId,save["recipes"][elem].length," for result:",elem)

     if(recipe[0].text in visited && recipe[1].text in visited)
        {



           if( (visited[recipe[0].text][0]<=-Infinity && visited[recipe[0].text][1]<=-Infinity) || (visited[recipe[1].text][0]<=-Infinity && visited[recipe[1].text][1]<=-Infinity))
          {
             recipeIdStack[stackLen - 1] += 1;
             continue checkIAndJ;

          }

           console.log("Parents  closed:",recipe[0].text,recipe[1].text, "for result:",elem)





          console.log("Good Parents :",recipe[0].text,recipe[1].text)
          let  val1=0,val2=0;
                val1=bad.includes(recipe[0].text)?1:(visited[recipe[0].text][0]>-Infinity?visited[recipe[0].text][0]:visited[recipe[0].text][1]);
                val2=bad.includes(recipe[1].text)?1:(visited[recipe[1].text][0]>-Infinity?visited[recipe[1].text][0]:visited[recipe[1].text][1]);
                 if(bad.includes(recipe[0].text) || bad.includes(recipe[1].text))
                              {

                                if(visited[elem]==undefined || ( visited[elem][1]<=-Infinity))
                                     visited[elem][1]=  Math.max(val1,val2)+1;
                                 else
                                     visited[elem][1]= Math.min(visited[elem][1], Math.max(val1,val2)+1);

                               console.log("bad parents")
                               }
                             else
                          if(visited[recipe[0].text][0]<=-Infinity || visited[recipe[1].text][0]<=-Infinity)
                            {

                              console.log("medium parents")
                              if(visited[elem]==undefined || (visited[elem][1]<=-Infinity))
                                  visited[elem][1]= Math.max(val1,val2)+1;
                                     else
                                  visited[elem][1]= Math.min(visited[elem][1], Math.max(val1,val2)+1);

                           }else
                             //pure ones set the good side from the good side
                             {        console.log("pure parents")
                                  if(visited[elem]==undefined || (visited[elem][0]<=-Infinity))
                                  visited[elem][0]= Math.max(visited[recipe[0].text][0],visited[recipe[1].text][0])+1;
                                         else
                                  visited[elem][0]= Math.min(visited[elem][0], Math.max(visited[recipe[0].text][0],visited[recipe[1].text][0])+1);
                             }





          recipeIdStack[stackLen - 1] += 1;
          continue checkIAndJ;
        }


      if(!(recipe[1].text in visited ))
        {

                console.log("Add in stack:",recipe[1].text)
                visited[recipe[1].text]=[-Infinity,-Infinity];


                elemStack.push(recipe[1].text);
                recipeIdStack.push(0);
                depthStack.push(0);
        }
     if(!(recipe[0].text in visited ))
     {
         console.log("Add in stack:",recipe[0].text)
         visited[recipe[0].text]=[-Infinity,-Infinity];
          elemStack.push(recipe[0].text);
          recipeIdStack.push(0);
          depthStack.push(0);


     }}

    return  (visited[elemIn.text][0]!=-Infinity?visited[elemIn.text][0]:visited[elemIn.text][1])
}
  function computeDepths(elements)
  {
        seen=[];
      visited={};
    let countInfinities=0;
    let previous=-1;
    let tempDepths=null;
    tempDepths=elements;
    let triesIfPrevious=4;

     do{ previous=countInfinities;
         countInfinities=0;
         if(previous==0)
           triesIfPrevious--;
   tempDepths=tempDepths.map(elem=>
                {
                  elem.depth=computeDepth3(elem);
                  console.log("computed",elem.text,elem.depth);
                   if(visited[elem.text][0]<=-Infinity)
                       countInfinities++;
                    return elem;
                }
                )
        console.log("infinities:",countInfinities, previous);
     }while((previous==0 && triesIfPrevious>0) || countInfinities<previous);


       console.log("visited",visited);
       window.visited=visited;
       window.depths={};

    tempDepths=tempDepths.map(elem=>{if(!base.includes(elem)) elem.depth=Infinity;
                                        return elem;});

        tempDepths.forEach


        (elem=>{


          window.depths[elem.text]=elem.depth;


        });



    return tempDepths;

  }
