(function () {

    var _downloadXmlModal = document.getElementById('modal-download-xml');
    var _xmlOutput = document.getElementById('xml-output');

    var downloadXmlBtn = document.getElementById('download-xml');
    addClickEvent(downloadXmlBtn, onClickDownloadXmlBtn);

    // Only display "Download" button if JavaScript is enabled
    show(downloadXmlBtn);

    var closeXmlOutputBtn = document.getElementById('close-output-xml');
    addClickEvent(closeXmlOutputBtn, onClickCloseXmlOutputBtn);

    function onClickDownloadXmlBtn() {

        var xml = generateXmlShoppingSheet();
        _xmlOutput.value = xml;

        show(_downloadXmlModal);

        _xmlOutput.focus();
        _xmlOutput.select();

        return;

    }

    function onClickCloseXmlOutputBtn() {

        hide(_downloadXmlModal);

    }

    function generateXmlShoppingSheet() {

        // Costs
        var totalEstimatedCost = getCurrencyValue('total-estimated-cost');
        var tuitionAndFees = getCurrencyValue('tuition-and-fees');
        var housingAndMeals = getCurrencyValue('housing-and-meals');
        var booksAndSupplies = getCurrencyValue('books-and-supplies');
        var transportation = getCurrencyValue('transportation');
        var otherEducationCosts = getCurrencyValue('other-education-costs');

        // Grants and Scholarships
        var totalGrantsAndScholarshisp = getCurrencyValue('total-grants-and-scholarships');
        var grants = getCurrencyValue('grants');
        var federalPellGrant = getCurrencyValue('federal-pell-grant');
        var grantsFromState = getCurrencyValue('grants-from-state');
        var otherScholarships = getCurrencyValue('other-scholarships');

        // Net Costs
        var netCosts = getCurrencyValue('net-costs');

        // Work Options
        var workStudy = getCurrencyValue('work-study');

        // Loan Options
        var federalPerkinsLoan = getCurrencyValue('federal-perkins-loan');
        var federalDirectSubsidizedLoan = getCurrencyValue('federal-direct-subsidized-loan');
        var federalDirectUnsubsidizedLoan = getCurrencyValue('federal-direct-unsubsidized-loan');

        // Other Options
        var familyContribution = getCurrencyValue('family-contribution');

        var reportData = {
            'costs':
                                        {
                                            'total_estimated_cost': totalEstimatedCost,
                                            'tuition_and_fees': tuitionAndFees,
                                            'housing_and_meals': housingAndMeals,
                                            'books_and_supplies': booksAndSupplies,
                                            'transportation': transportation,
                                            'other_education_costs': otherEducationCosts
                                        },

            'grants_and_scholarships':
                                        {
                                            'total_grants_and_scholarships': totalGrantsAndScholarshisp,
                                            'grants': grants,
                                            'federal_pell_grant': federalPellGrant,
                                            'grants_from_state': grantsFromState,
                                            'other_scholarships': otherScholarships
                                        },

            'net_costs': netCosts,

            'work_options':
                                        {
                                            'work_study': workStudy
                                        },

            'loan_options':
                                        {
                                            'federal_perkins_loans': federalPerkinsLoan,
                                            'federal_direct_subsidized_loan': federalDirectSubsidizedLoan,
                                            'federal_direct_unsubsidized_loan': federalDirectUnsubsidizedLoan
                                        },

            'other_options':
                                        {
                                            'family_contribution': familyContribution
                                        }
        };

        var xml = convertJsonToXml('shopping_sheet', reportData);
        return xml.replace('\n', ''); // Remove the first new line
    }

    function convertJsonToXml(rootName, data) {

        var output = "\n<" + rootName + ">";

        for (elemName in data) {

            var elemValue = data[elemName];

            if (isString(elemValue)) {
                output += "\n<" + elemName + ">" + elemValue + "</" + elemName + ">";
            } else {
                output += convertJsonToXml(elemName, elemValue);
            }

        }

        output += "\n</" + rootName + ">";

        return output;

    }

    function isString(obj) {
        return Object.prototype.toString.call(obj) == '[object String]';
    }

    function getCurrencyValue(id) {
        return '$' + document.getElementById('value-' + id).innerHTML;
    }

    function addClickEvent(elem, fn) {

        var wrappedFn = function (evt) {

            // Prevent the "default" behavior associated with the event (e.g. navigating
            // to a URL when a User clicks a link)
            // Source: https://github.com/jquery/jquery/blob/master/src/event.js
            if (evt.preventDefault) {
                evt.preventDefault();
            } else {
                evt.returnValue = false;
            }

            fn();
        };

        if (elem.addEventListener) {
            elem.addEventListener('click', wrappedFn, false);
        } else if (elem.attachEvent) {
            elem.attachEvent('onclick', wrappedFn);
        } else {
            elem['onclick'] = wrappedFn;
        }

    }

    function show(elem) {
        elem.style.display = 'block';
        elem.style.visibility = 'visible';
    }

    function hide(elem) {
        elem.style.display = 'none';
    }

})();