import React from 'react';

function TopicsPage() {
    return (
       <>
            <h2><strong>Web Development Concepts</strong></h2>
            <nav class="nav-local">
                <a href="#server">Web Servers</a>
                <a href="#frontend">Frontend Design</a>
                <a href="#images">Optimizing Images</a>
                <a href="#favicons"> Favicons</a>
                <a href="#css">Cascading Stylesheets</a>
                <a href="#forms">Forms</a>
                <a href="#express">Express</a>
                <a href="#JavaScript">JavaScript</a>
            </nav>
            <article id="server">
                <h3><strong>Web Servers</strong></h3>
                <p> In terms of websites and servers, the index, also called the designated homepage, is a default page when the client requests a resource or directory from a server. It is often named index.html, index.php, index.js, default.htm, etc. </p>
                <p> In the Chrome's Web Inspector Network tab output screen, one is able to see page's status, method, IP, policy, language, cache instructions, and browser version. The most obvious difference would be the URL. On the local computer, the URL tells the exact location or path of the file that is stored directly on the machine, but the web server displays a complete URL with scheme/subdomain/domain/path to a page. Also, one can see the difference in the status code of main.css and main.js files, where the local computer prints out "failed" and the web server prints out "404" Error code due to missing files. Finally, one can notice the difference in the existence of the Remote Address, which the web server fully displays the IP address when the local computer does not have one.</p>
                <p> The status code tells the result of the HTTP request in three ways: successful, encountered an error, or requires additional steps. The favicon.ico file has a status of 200, which indicates that the request was successful, since the OSU server provides it automatically. On the other hand, main.css and main.js files do not, due to the error code 404, which indicates that the requested files do not exist. </p>
                <p> The scheme of the URL is "https", the subdomains are "web" and "engr", the host domain is "oregonstate.edu", and finally the resource is "~leeowe".</p>
            </article>
            <article id="frontend">
                <h3><strong>Frontend Design</strong></h3>
                <p>The concept of frontend design focuses on the user experience of a website or web application. It involves utilization of visuals, such as how elements are arranged on a page, color scheme, and graphics, and interaction, such as navigating and usability, to satisfy users expectations.</p>
                <dl>
                    <dt><strong>Effective</strong></dt>
                    <dd>Effective is one of the factors of usability that represents how accurately the website presents the results that the user is looking for and help the user to meet their expectations.</dd>
                    <dt><strong>Efficient</strong></dt>
                    <dd>Efficiency determines the performance of the website by how fast the website gets the result with the least number of steps.</dd>
                    <dt><strong>Easy to Navigate</strong></dt>
                    <dd>Navigation is crucial for websites or web applications, because easy to navigate means users will have better understanding of how to locate, where to search, and easily remember for next time when they come back. It will ultimately increase the number of visits by the users.</dd>
                    <dt><strong>Error-Free</strong></dt>
                    <dd>Error-Free is another important factors of usability, and it is often achieved by investigating user's common errors while exploring the website or web application. One is responsible to continually check for if the user will face any difficulties or struggle to satisfy their needs.</dd>
                    <dt><strong>Enjoyable</strong></dt>
                    <dd>Finally, the user must enjoy or be engaged throughout the exploration of the website or web application to bring them back after the first initial visiting. This is done by successfully achieving the previous four "E"s and providing the exceptional overall experience.</dd>
                </dl>
                <p>The purpose of each of the <strong>page layout tags</strong>, such as header, nav, main, section, etc., is to separate the contents and display them to browsers with a newline. Although they do not dynamically change the visuals of the website, they are included to help machines
                    locate different components and contents of the website.</p>
                <ol>
                    <li><strong>External Anchor</strong> is primarily used to link URL that is outside of the current website or external content. When the user clicks the linked URL, they will be directed to the page.</li>
                    <li><strong>Internal Anchors</strong> are primarily used to move from one text item to another text item located within the same page, or from page to page with designated IDs. The ID attribute is used with a hashtag as a reference for an anchor that is within the same page.</li>
                </ol>
            </article>
            <article id="images">
                <h3><strong>Optimizing Images</strong></h3>
                <p>There are six major specifications for images for the web:   <strong>File names have to be descriptive and concise</strong> to improve search engine optimization (SEO), which will help users search for related images.  
                                                                                <strong>The File size has to be small</strong> to reduce the load time of images, and high resolution images are best served on high-resolution devices. Lossless compression techniques help to reduce the size of images without degrading their visual quality.
                                                                                <strong>Images have to fit the dimensions of the spaces</strong> in the web page to provide proper load time, otherwise, they will load slowly if the size is too big. 
                                                                                <strong>Images have to be in the correct file format</strong> to properly load on the website. For example, JPG is used for online photos, and GIF is used for line-art images.
                                                                                As technology improves, different monitors are provided, and therefore <strong>providing multiple image sizes</strong> for each is optimal.
                                                                                <strong>Different color modes are available for different formats.</strong> For example, RGB is used for .PNG, .JPG, .SVG, and .WebP.
                                                                                Photos and online photos are appropriate with .JPG because they are optimized at 150px wide in RGB color mode at 72 ppi (pixels per inch), which means .JPG can handle a wide range of colors and its compression capabilities. .PNG and .GIF are appropriate file formats for line-art images because of their transparency support, which allows logos or icons to be displayed on various backgrounds or colors without distortion. Also, .GIF supports animations which are not available in .PNG files.
                </p>
            </article>
            <article id="favicons">
                <h3><strong>Favicons</strong></h3>
                <p><strong>Favicons</strong>, also called favorite icons or touch icons, are displayed on the browser tab as well as on the bookmarks to help users identify and switch between tabs more easily and quickly when they are in the correct size and file type. Favicons are saved in .GIf, .PNG, .ICO, .SVG file formats, and .ICO, originally made for Internet Explorer, is typically used for older browsers, but it is still being used today. .SVG and .PNG files can now be commonly seen as device resolutions increase and the requirements of favicons change.</p>
            </article>
            <article id="css">
                <h3><strong>Cascading Style Sheets</strong></h3>
                <p>One of the reasons why Cascading Style Sheets are incorporated in websites and apps is to separate the content of the website from its presentation, which improves readability and usability. They allow you to maintain consistency across all pages of the website by using selectors, IDs, and classes. For example, all headings at a certain level can have the same color, font, font size, etc. Without stylesheets, front-end developers have to specify styling information for every single element within the HTML code, which makes HTML files larger, increases the load time, and is difficult to read. Lastly, stylesheets enable responsive web design techniques so that the website adapts the layout based on the user's device's screen size and satisfies the user's experience on mobile devices and desktop computers.
                    There are five ways to incorporate styles: <strong>External stylesheets</strong> are separate .css files that are linked to an HTML document. It uses the &lt;link&gt tag in the global &lt;head&gt area of a website. It is the most efficient and prefered method to use for an app or website.
                                                               <strong>Inline styles</strong> are another way to incorporate styles, and they are used within an element using the style attribute. Inline can be useful for the developer for quick testing, but it has to be written in HTML, which mixes content with presentation.
                                                               <strong>Embedded</strong> can be used to incorporate styles by using &lt;style&gt tag. While external stylesheets typically provide styles to all pages of the website, embedded is used to define styles only to that specific page.
                                                               <strong>Regular JavaScript</strong> is also used to incorporate styles by manipulating the Document Object Model (DOM). It looks for a specific tag and changes or manipulates its style.
                                                               Lastly, <strong>the JavaScript template literals</strong> in JavaScript incorporates styles by assigning newly created styled component to a variable and it then uses that variable to incorporate styles.
                </p>
            </article>
            <article id="forms">
                <h3><strong>Forms</strong></h3>
                <p>There are six major goals for accessible forms. One of the goals is <strong>providing clear guidelines</strong> at the beginning of the form and within the labels. It is important to know that placeholder values are only helpful for users with vision. Another one is <strong>informing users</strong> about the purpose of data collection and specifying which fields are mandatory.
                The third goal is <strong>activating the autofocus</strong> on the first field so that users can begin typing without needing to use the keyboard. Making sure that every form control can be <strong>completed using only the keyboard</strong> for those who cannot or do not use a mouse or trackpad. <strong>Adding tab indexing</strong> is also a crucial goal of accessible forms, so 
                that it guides users on the sequence of filling in the fields. Lastly, ensure that <strong>all validation messages can be read</strong> by a screen reader. Built-in HTML browser messages are usually not screen-readable. These goals are achieved by using the major tags, their attributes, and their purposes. The first one is <strong>&lt;form&gt</strong>, which is used to define a form.
                It has attributes called <strong>action</strong>, the URL where form data is sent, and <strong>method</strong>, the HTTP method used to send the data. <strong>&lt;input&gt</strong> tag, which defines an input control, has various attributes like type. The <strong>type</strong> attribute can change the type of input control from how it is displayed to how it is used, and it can also include other attributes. <strong>Name</strong> is another attribute for the input tag,
                which is the name of the input control to communicate with the server which part of the data item it is associated with. Lastly, the <strong>required</strong> attribute is responsible for preventing a malicious bot from submitting the form multiple times and crashing the website by expecting users to provide correct data in addition to any ciritical responses. <strong>&lt;fieldset&gt</strong> and <strong>&lt;legend&gt</strong> tags are used for complex forms when the 
                website needs to separate controls into logical groups. The default gray border from &lt;fieldset&gt tag and the prompt, positioned at the top of the border, from &lt;legend&gt tag provide clear instructions for users to comprehend the purpose of the group. <strong>&lt;select&gt</strong> tag offers users a selection from a drop-down menu, and the name attribute is used in the &lt;select&gt element for transmitting the user's selection in the request. Also, <strong>&lt;option&gt</strong>
                tag is nested within the &lt;select&gt tag, which defines the available options for the drop-down menu. The slected attribute is set to default to the 'Other' option. <strong>&lt;textarea&gt</strong> provides users with a platform to enter multi-line text, such as their messages to you. It has its own &lt;label&gt tag and many attributes, such as cols, dirname, form, maxlength, etc. <strong>&lt;button&gt</strong> is often used to respond to various activation methods such 
                as keyboard press, mouse click, voice command, or finger touch. The action it carries out is determined by the action attribute in the &lt;form&gt tag.</p>
            </article>
            <article id="express">
                <h3><strong>Express</strong></h3>
                <p><strong>Node.js</strong> is an open-source, cross-platform environment that allows for the creation of server-side and networking applications. Applications built with Node.js are written in JavaScript, and they can function within the Node.js runtime on a range of operating systems, including MacOS, Microsoft Windows, and Linux. Node.js comes with a library of different JavaScript modules, greatly streamlining the process of web application development using Node.js. To use these libraries, 
                    <strong>npm</strong>, an online repository for publishing Node.js packages and a command-line utility that can install packages from the online repository, can be utilized to eliminate the need to write common functionalities from scratch and easily update packages with basic commands like npm install, npm update, etc. Also, it keeps track of the exact version of every package your project relies on. <strong>Express</strong>, also known as Express.js, offers Application Programming Interfaces (APIs) that simplify various routine tasks
                    needed in web application development. With Express, we can acquire, post, remove, and establish the ports and pathways for data transmission. It allows us to serve static files, such as from a public directory, and create templates that generate responses incorporating this data. We can also utilize middleware to process requests made along the route of the data.</p>
            </article>
            <article id="JavaScript">
                <h3><strong>JavaScript</strong></h3>
                <p>There are six main data types in JavaScript: a <strong>number</strong>, a <strong>Boolean value</strong>, either true or false, a <strong>string</strong>, a <strong>symbol</strong>, an <strong>object</strong>, and the special values <strong>null</strong> and <strong>undefined</strong>.
                In JavaScript, an object is a set of name-value pairs, also called properties, and they are expected to have an identity, state and behavior. One can perform operations, such as creating, removing, updating, and deleting, on an object in JavaScript, which is also referred to as CRUD. Objects are used to model and structure data throug
                <strong>object-oriented programming</strong>. Every JavaScript object has an internal property for its <strong>prototype</strong>, which is a special object that collects properties common to multiple objects. This special object allows one to establish common properties once and then initialize multiple objects that automatically assign these properties. 
                JavaScript also supports defining <strong>classes</strong>, similar to other programming languages with a constructor that assigns properties to them. Additionally, JavaScript provides <strong>subclasses</strong>, which are the extensions of an existing class that inherits properties as well as methods while adding their own.
                <strong>Arrays</strong> are a special type of object. They are used for storing multiple values in a single variablem and JavaScript requires the properties of an object to be a string data type.
                They can hold any type of value, such as numbers, strings, and objects, and have different methods, such as pop(), includes(), and push(), to fully control the structure of the data. <strong>JSON</strong>, an acronym for JavaScript Object Notation,  is a widely utilized format for data exchange between applications.
                Despite having JavaScript in its name, JSON is not restricted to any specific programming language. Various programming languages, including JavaScript, Python, Java, C#, and others, offer libraries for JSON. One can convert an object in a program to a JSON-formatted string and generate an object in a program from 
                a JSON-formatted string with JSON. JSON enables data interchange between programs written in diverse programming languages in two ways: JSON.stringify(), which converts a JavaScript object into a JSON string, and JSON.parse(), which creates a JavaScript object from a JSON string. <strong>Conditionals and loops</strong>
                in JavaScript are crucial part of creating an interactive experience for the user because they allow the code to make decisions. Conditions in JavaScript can contain values of any type, and the most common types of conditionals are the "if", "else", "else if", and "switch" statements.
                These conditionals are used to perform different actions based on different conditions. Similar to conditionals, loops in JavaScript are used to perform repeated actions based on a condition, and the common types are "for", "while", and "do...while". The condition is evaluated before each repetition, and if it returns
                true, then the loop continues, otherwise, it stops. <strong>Functional programming</strong> is a programming where programs are constructed by applying and composing functions. Functions in JavaScript are "first-class" values and with these values developers can assign functions to variables, define functions that receive other functions as arguments, and define functions that return fucntions. 
                In addition to "first-class" values, <strong>higher-order functions</strong> take two or more functions, such as <strong>fuction expressions</strong>, an expression that returns a function, as arguments, returns a function, or both, which can handle more complex computations. A <strong>closure</strong> is a function that has access to its own scope, the outer function's scope, and the global scope.
                Closures allow a function to access all the variables, as well as other functions, that are in scope when the function is created by using <strong>free</strong> and <strong>capture</strong> variables. Lastly, there are <strong>exceptions</strong> that catch an error, with <strong><i>try</i></strong> and <strong><i>catch</i></strong>, in a function. 
                This error handling mechanism throws exceptions whenever it detects an error in a function. Functional programming leads to code that is more predictable, easier to test, and easier to debug in JavaScript.</p>
            </article>
            </>
    );
}
export default TopicsPage;