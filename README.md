# A4-happy-moments

## Design Rationale

### Overview

The dataset we chose, HappyDB by Megagon Labs, was comprised of two CSV files that we joined together, one containing happy moment blurbs and their categories, and the other containing author demographics such as gender, marital status, parenthood status, and age. We had a lot of fun just reading through the moments, so we were inspired to build a visualization that would allow readers to do the same. We also thought it was interesting to explore and discover what made people of different demographics happy -- for example, did we share happy moments with people who had similar demographics as ourselves? Thus, we decided to choose visual encodings that would allow viewers to 1) easily and quickly read the individual moments and 2) be able to explore some questions and curiosities of their own. 
We started off visualizing happy moments in a chart, with age of author on the x-axis and moments stacked up on the “y-axis”. However, we realized that this type of layout was not super informative, and could actually be misleading because the majority of authors were younger (since the data was collected on MTurk) -- our chart made it look like older people had less happy moments, though what was actually happening was that there were just a lot less older authors in general. So, we decided to rethink our visualization layout. We ended up making a grid of “pixels” of happiness -- one pixel representing one happy moment -- where viewers can read each moment by hovering/clicking on the pixel. Inside the grid, pixels are grouped by category (of which there are 7 in total: achievement, affection, bonding, enjoy the moment, exercise, leisure, and nature) so that the proportions of happy moments belonging to each category can easily be seen. Finally, we added filters for demographics (gender, marital status, parenthood status, and age) so that viewers can explore what happiness means to people of different demographics.

### Grid Design

Since the happy moment blurbs came labeled with categories, we wanted to display the different proportions of happy moments for each category so that viewers could get a sense of which categories were more important to a group of people. For example, what categories most commonly made females happy? This also made comparisons between different groups of people easy, by simply comparing how the proportions changed from group to group. At the same time, we didn’t want to overwhelm the viewer with data, so we didn’t want to display all of the moments possible for a given selection of filters. Thus, we decided to use a grid confined to a maximum number of moments. We keep the grid representative of the dataset’s distribution of categories by calculating how many pixels in the grid should belong to each category throughout the entire dataset, then displaying a random subset of moments from each category according to the calculated proportions.

### Additional Visual Encodings

Other visual encodings that we implemented were the category icons, and the highlighting of the block of moments belonging to a category when a viewer hovers over the corresponding category icon (for example, the orange block pops out when you hover over the orange colored trophy icon). We thought the color coordination and highlighting of moments (redundant encodings) would make it easier for the viewer to locate and connect the moments belonged that belonged to each category, as well as promote greater viewer interaction and exploration of the visualization. 

### Interaction

In terms of interaction, we chose two layers through which users can explore the data: 1) a tooltip, and 2) a modal. The tooltip provides the full text of the happy moment over which the user hovers. We considered including only a one-line preview of the text; however, we wanted to enable the user to quickly read moments in their entirety. Forcing readers to click to view the full contents of the moment would introduce friction, discouraging exploration. The modal, shown upon clicking the data point, displays the moment text and includes other details. We included the demographic information, in a style reminiscent of social media hashtags, in order to encourage imagination of the human element behind each of these happy moments. The style of these “tags” are mimicked in the Filter checkboxes to enforce visual continuity. 
We implemented filters to allow for interactive exploration of how different demographics respond differently. For example, selecting for “female” and “married” tends to yield different content than “male” and “single.” We elected for a checkbox design because it is a visually clear and familiar method of input for the user.

### Animation

We decided to animate our grid to go with the theme of the visualizations -- when a new selection is made and the grid is re-rendered, the pixels appear one after the other, mimicking how pixels sometimes load :)

## Development Process

### Work Split

For the visualization that is published: rendering the data in D3, data pre-processing, and filtering scripts were largely done by Elaine. The tooltip, modal, and other interactive details were largely done by Kathryn. Visualization design conceptualization and iteration, as well as styling, were shared efforts. 

### Commentary

Our initial visualization design/concept for this dataset was very different from what is published – it resembled a histogram more than the chart that we currently have. After working on our original design for a few days, from mockup to near-completion, we decided that the narrative was uncompelling and possibly misleading. Thus, Elaine drafted a new design, and because of concerns of time constraints, we decided to work in parallel on both the original and new visualizations, to see which one bore more fruit. (Kathryn was working on the original visualization, and Elaine on the new one, which is why the work split described above might look uneven.)
We found that the new visualization was working well, so we moved forward with the new design. Development continued more smoothly, as we got our bearings with D3 and the intricacies of HTML/CSS/JS.

### Time

Kathryn: I spent ~3 hours researching datasets, 1 hour with Elaine deciding a dataset, and probably ~25 hours coding (and writing), for a total of ~29 hours.

The most time consuming part for me was definitely trying to figure out how to render the data in D3 (for our original visualization). It was an atypical design: a histogram-like chart, but each data point in each bin was individual selectable. There were no existing examples with source code that I could find online, and I was very new to D3, so I ran into many many dead ends in the process. It worked in the end though! 

Elaine: I spent ~2 hours looking through datasets, 1 hour to plan out the project with Kathryn, and ~30 hours on the project + writeup.

Similar to Kathryn, the most time consuming part for me was probably trying to figure out how to render the chart for our original viz, and also just learning how to use D3 / how it works in general. After switching to the new version of 


## Sources
Data from
https://www.kaggle.com/ritresearch/happydb#cleaned_hm.csv

Visualization concepts inspired by
https://pudding.cool/2018/11/dearabby/

Category icons from https://flaticon.com/

D3 Tooltips adapted from
https://bl.ocks.org/d3noob/a22c42db65eb00d4e369

D3 Bootstrap modal integration adapted from
http://embed.plnkr.co/1nSOK6MTMvbzHtwFjCy6/
