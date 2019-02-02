/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('has a URL defined',function(){
            allFeeds.forEach(function(feed)
            {
               expect(feed.url).toBeDefined();//ensure that URL is defined
               expect(feed.url.length).not.toBe(0);//ensure that the length of URL not zero so, it's not empty
            });
        });
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('has a name defined',function(){
            allFeeds.forEach(function(feed)
            {
               expect(feed.name).toBeDefined();//ensure that name is defined
               expect(feed.name.length).not.toBe(0);//ensure that the length of name not zero so, it's not empty
            });
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
    });

    describe('The menu',function(){

        it('is hidden by default',function(){
            const body=document.querySelector('body');
            expect(body.classList.contains('menu-hidden')).toBe(true);//ensure that the body has class 'menu-hidden' that ensure the menu is hidden by default
                    });

        it('changes visibility when the menu icon is clicked',function(){
            const body=document.querySelector('body');
            const menuIcon=document.querySelector('.menu-icon-link');
             menuIcon.click();//it clicks the menu icon
             expect(body.classList.contains('menu-hidden')).toBe(false);//ensure that the menu is visable
             menuIcon.click();    
             expect(body.classList.contains('menu-hidden')).toBe(true);//ensure that menu is hidden again after the second click
            
               
        });
    });

    /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
         
    describe('Initial Entries',function(){
        const feedContainer=document.querySelector('.feed');
        const entry=document.querySelectorAll('.entry-link');
        
        beforeEach(function(done){// call back function
            loadFeed(0,function(){//load loadFeed function
                
                done();
            });
              
        });
        it('there is at least a single entry element within the feed container',function(done){
            
            expect(entry.length).not.toBe(0);//ensure that there is a content in the entry-link
            done();
        });
        
    });

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
     describe('New Feed Selection',function(){
        const entry=document.querySelectorAll('.entry');
        let intialEntry=[];
        let changedEntry=[];
        beforeEach(function(done){//all back function
            loadFeed(0,function(){
                entry.forEach(function(entry){
                    intialEntry.push(entry.innerText);//put the first content in intial entry array
                });
            loadFeed(1,done);//load the second content
            });  
        });
        it('ensures when a new feed is loaded',function(done){

            entry.forEach(function(entry){
                    changedEntry.push(entry.innerText);//put the second content in intial entry array
                });

            expect(changedEntry===intialEntry).toBe(false);//compare the first and second content and ensure to be false
            done();
        });

     })

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
