#Restaurants
This is Restaurant application created with React. 

### Components

1. **Navbar**
   - Contains the header area, including links to the homepage (logo) and favorites page.
   - Shown on every page.

2. **Footer**
   - Contains a paragraph.
   - Shown on every page.

3. **RestaurantCard**
   - Represents a restaurant card item and is a link to the restaurant detail page.

4. **AllRestaurants**
   - Lists all the RestaurantCard components based on data from `db.json`.

5. **RestaurantDetail**
   - Detail page for each restaurant card, displaying data from `db.json`.
   - Includes a reviews section with fully functional reviews.
   - Ratings are based on review stars and displayed on both RestaurantCard components and detail pages.
   - Reviews can be added using a review form with an AJAX PUT request to update the `db.json` file.
   - Restaurant rating updates based on the new average score.

6. **PopularRestaurants**
   - Lists the top 10 restaurants with the most reviews using the RestaurantCard component.
   - Optional: Sort restaurants based on ratings.

7. **SurpriseRestaurant**
   - A section with a link to a random restaurant detail page each time you click on it.

8. **Cuisines**
   - Lists button-links based on all restaurant types from `db.json`.

9. **CuisineDetail**
   - Detail page for each cuisine, filters all restaurants based on the restaurant type from `db.json`.
   - Uses the RestaurantCard component to display filtered results.

10. **Favorites**
    - Lists all RestaurantCard components that are hearted.
    - Utilizes `localStorage` to manage favorites.
