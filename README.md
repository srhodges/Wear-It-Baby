# Wear It, Baby!


## Overview

This application will serve as a retail site where users can browse inventory, upload and edit items and contact owner. 

https://wearitbaby.netlify.app/

<br>

## Wireframes

https://whimsical.com/wear-it-baby-4vWbSZPj72kv8pCWaj1MXZ

### MVP/PostMVP

> The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP

- Successfully create and render external api
- Successfully allow user to add items 
- Successfully route to all pages

#### PostMVP Completed

- Allow uers to upload image to api/application 
- Create functional contact form
 
<br>

## Project Schedule

> This schedule will be used to keep track of your progress throughout the week and align with our expectations.

| Day           | Deliverable                                        | Status     |
| ------------- | -------------------------------------------------- | ---------- |
|Sept 16th | Prompt / Wireframes / Priority Matrix / Timeframes       | Complete |
|Sept 17th | Project Approval                                         | Complete |
|Sept 18th | Core Application Structure (React, CSS, etc.)            | Complete |
|Sept 19th | Pseudocode / actual code                                 | Complete |
|Sept 20th | Initial Clickable Model                                  | Complete |
|Sept 21th | MVP                                                      | Complete |
|Sept 24th | Presentations                                            | Complete |

<br>

## Timeframes

> Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.


| Component           | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Formatting React App|    H     |     8 hrs      |     6 hrs     |    6 hrs    |
| Working with API    |    H     |     4 hrs      |     4 hrs     |    4 hrs    |
| Functionality in JS |    H     |     6 hrs      |     6 hrs     |    6 hrs    |
| Styling with CSS    |    H     |     8 hrs      |     6 hrs     |    6 hrs    |
| Total               |          |     26 hrs     |     22 hrs    |    22 hrs   |

<br>

## Code Snippet

```
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchInventory } from '../services';

export default function Inventory() {
  const [items, setItems] = useState([]);

  
  useEffect(() => {
    const getInventory = async () => {
      setItems(await fetchInventory());
    }
    getInventory();

  }, []);

  return (
    <div>
      {items.map((item) => {
        return (
          <Link to={`/inventory/${item.id}`} key={item.id}>
            <h3>{item.fields.name}</h3>
          </Link>
        );
      })}
    </div>
  );
}

```
