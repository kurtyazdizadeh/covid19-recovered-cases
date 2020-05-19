# COVID-19 Recovered Cases Tracker

A web application using [Google GeoCharts](https://developers.google.com/chart/interactive/docs/gallery/geochart) and the [Coronavirus Smartable API](https://developer.smartable.ai/api-details#api=coronavirus&operation=stats) to display cases of patients who have recovered from COVID-19 in the United States.


### Live Demo

Try the application live at [https://covid19recoveredtracker.kurtyazdizadeh.com](https://covid19recoveredtracker.kurtyazdizadeh.com)


### Features
- Displays a general overview of the country, showing recovered cases per state.
- Displays **recently recovered** cases and **total cases** for the region displayed on the map.
- List view will show a badge for **recently recovered** cases per state (if available).
- Clicking on a state (or choosing from the list, if available) loads a more detailed view of that state's data, **showing recovered cases per county** (if recorded), otherwise will show unknown locations as a general recovery for that state.
- **Mobile Responsive:** will work in *portrait* and *landscape* mode for **iPhone 6/7/8** and **iPad**


### Preview

![site-demo](/images/site-demo.gif)


### Development
#### Getting Started

1. Clone the repository.

   ```shell
   git clone https://github.com/kurtyazdizadeh/covid19-recovered-cases
   ```

2. Install all dependencies with NPM.
  
    ```shell
    npm install
    ```
3. Start the project. Once started you can view the application by opening http://localhost:3000 in your browser.

    ```shell
    npm run dev
    ```

### Screenshots
#### iPad Landscape
![ipad-landscape](/images/ipad-ls.png)
![ipad-landscape-detailed](/images/ipad-ls-state.png)

#### iPad Portrait
![ipad-portrait](/images/ipad-pt.png)
![ipad-portrait-detailed](/images/ipad-pt-state.png)

#### iPhone 6/7/8 Landscape
![iphone-landscape](/images/iphone-ls.png)
![iphone-landscape-detailed](/images/iphone-ls-state.png)

#### iPhone 6/7/8 Portrait
![iphone-portrait](/images/iphone-pt.png)
![iphone-portrait-detailed](/images/iphone-pt-state.png)
