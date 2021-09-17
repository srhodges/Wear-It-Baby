# Project Overview

## Project Name

Wear It, Baby!

## Project Description

This application will serve as a retail site where user can see inventory and add items.

## API and Data Sample


## Wireframes

https://whimsical.com/wear-it-baby-4vWbSZPj72kv8pCWaj1MXZ

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP

_These are examples only. Replace with your own MVP features._

- Successfully create and render external api
- Successfully allow user to add items 
- Successfully route to all pages
- Make it look nice!

#### PostMVP

- Allow uers to upload image to api/application 
- Create usable contact form
- Add shopping cart

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

| Day           | Deliverable                                        | Status     |
| ------------- | -------------------------------------------------- | ---------- |
|Sept 16th | Prompt / Wireframes / Priority Matrix / Timeframes | Complete |
|Sept 17th | Project Approval                                   | Complete |
|Sept 18th | Core Application Structure (React, CSS, etc.)      | Complete |
|Sept 19th | Pseudocode / actual code                           | Incomplete |
|Sept 20th | Initial Clickable Model                            | Incomplete |
|Sept 21th | MVP                                                | Incomplete |
|Sept 24th | Presentations                                      | Incomplete |

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix. Link this image in a similar manner to your wireframes

*Trying to upload matrix image*

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component           | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Formatting React App|    H     |     8 hrs      |     3 hrs     |    3 hrs    |
| Working with API    |    H     |     4 hrs      |     6 hrs     |    6 hrs    |
| Functionality in JS |    H     |     6 hrs      |     4 hrs     |    4 hrs    |
| Styling with CSS    |    H     |     8 hrs      |     5 hrs     |    5 hrs    |
| Total               |          |     24 hrs     |     0 hrs     |    18 hrs   |

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

## Change Log

Use this section to document what changes were made and the reasoning behind those changes.
