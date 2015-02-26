# Financial Aid Shopping Sheet Template

An open-source web template for the Financial Aid Shopping Sheet. This template is based on the
[original HTML specification template](http://ifap.ed.gov/eannouncements/092812ImplementoftheFinancialAidShopSheet.html).

__This project is neither endorsed by nor affiliated with the Department of Education.__

This template also includes the [2015-16 updates](http://www.ifap.ed.gov/eannouncements/022415FinancialAidShoppingSheet20152016.html).

## Background

On July 24, 2012, the Obama administration [introduced the Shopping Sheet](http://www.whitehouse.gov/the-press-office/2012/07/24/fact-sheet-administration-releases-final-version-financial-aid-shopping-),
a tool to help students better understand and compare the costs of attending college. U.S. Secretary of Education Duncan followed this announcement with an
[open letter](http://www2.ed.gov/policy/highered/guid/secletter/120724.html) urging all higher education institutions to adopt
the new Shopping Sheet.

On September 28, 2012, the Department of Education provided a [HTML template](http://ifap.ed.gov/eannouncements/092812ImplementoftheFinancialAidShopSheet.html)
that could be used by instutitons to display the Shopping Sheet on their website.

## Why Create This Template?

Although the Department of Education already provides a viable [HTML Shopping Sheet template](http://ifap.ed.gov/eannouncements/092812ImplementoftheFinancialAidShopSheet.html),
this open-source template builds and improves upon this template, including:

* __Separating CSS and HTML__ for better separation of concerns
* __Reducing the overall size of the HTML markup__ for improved performance and easier modifiability
* __Reducing the use of images__ for improved performance and increased control of content through markup and styling
* __Reducing the file size of the images__ for increased performance
* __Providing customization instructions__ for easier template customization
* __Adding a "Download XML" modal dialog__ for better integration of that feature within the interface

This repository itself also provides an open forum for people to suggest continued improvements to the template and also allows
developers to further extend the template.

## Customization

The template uses minimal, semantic markup which makes it straightforward to customize. As explained below, some of the customizations
require modifying the CSS declarations within the `main.css` file:

### Customizing the Logo

To change the university logo in the header, simply replace the `logo.png` file in the `images` directory. You will also want
to change the `alt` text of the `img` element that references that image in the `index.html` so that it will be accessible
to Users with screenreaders.

### Customizing the Text

"UUS" and "University of the United States" appear throughout the text. Replace these with the name and acronym for your
university.

### Customizing Graduation Rate Percentage

To adjust the position of the "Graduation Rate" percentage marker, modify the `margin-left` value within the CSS declaration
located at the top of the `main.css` file under the `Graduation Rate Percentage` comment header.

### Customizing the Loan Default Rate Bar Chart Height

To change the height of the "Loan Default Rate" bar charts, adjust the `padding-top` and `height` values within the CSS
declarations located at the top of the `main.css` file under the respective "Loan Default Rate Bar Chart" comment headers.

## Copyright

Copyright &copy; 2014. The Regents of the University of California. All rights reserved.

## License

Licensed pursuant to the terms and conditions available for viewing at: http://opensource.org/licenses/BSD-3-Clause

## Disclaimer

__This project is neither endorsed by nor affiliated with the Department of Education.__
It the responsibility of each individual
institution to ensure an implementation of the Shopping Sheet meets any mandated requirements.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

By using this template, you acknowledge that you have read and agree to these terms.
