// TODO: Fix regex pattern for input. Console gave error
// TODO: Switch time input from fields to dropdown. 

// TODO: Add remaining svg files in code for NumberTemplate function

const hoursInputId = "timeInputHours";
const minutesInputId = "timeInputMinutes";
const secondsInputId = "timeInputSeconds";
const hoursLeftDigit = "hoursLeft";
const hoursRightDigit = "hoursRight";
var hours;
var minutes;
var seconds;
var timeInputFields;

var foo;

$(document).ready(function() {
    timeInputFields = $(".input-time");
    
    timeInputFields.change(function(){
        RefreshTimer(this);
    });
});

function RefreshTimer(obj) {
    if (obj !== undefined) {
        var section;
        var leftDigit = obj.value[0];
        var rightDigit = obj.value[1];

        switch (obj.id) {
            case "timeInputHours":
                //UpdateClockDigitSvg("hours", timeValue);
                section = "hours";
                break;
            case "timeInputMinutes":
                //UpdateClockDigitSvg("minutes", timeValue);
                section = "minutes";
                break;
            case "timeInputSeconds":
                //UpdateClockDigitSvg("seconds", timeValue);
                section = "seconds";
                break;
        }

        // Update left digit
        $(`#${section}Left`).empty();
        $(`#${section}Left`).append(GetSvgTemplate(leftDigit));
        // Update right digit
        $(`#${section}Right`).empty();
        $(`#${section}Right`).append(GetSvgTemplate(rightDigit));
    }
}

function GetSvgTemplate(num) {
    var template;
    console.log("hit");
    switch (num) {
        case "0":
            template = NumberTemplate.Zero;
            console.log(template);
            break;
        case "1":
            template = NumberTemplate.One;
            break;
        case "2":
            template = NumberTemplate.Two;
            break;
        case "3":
            template = NumberTemplate.Three;
            break;
        case "4":
            template = NumberTemplate.Four;
            break;
        case "5":
            template = NumberTemplate.Five;
            break;
        case "6":
            template = NumberTemplate.Six;
            break;
        case "7":
            template = NumberTemplate.Seven;
            break;
        case "8":
            template = NumberTemplate.Eight;
            break;
        case "9":
            template = NumberTemplate.Nine;
            break;
    }
    return template;
}

class NumberTemplate {
    static Zero = `<svg
        width="112.85956"
        height="201.67896"
        viewBox="0 0 112.85956 201.67896"
        version="1.1"
        id="svg5"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg"><defs
        id="defs2" /><g
        id="g1751-55-8-4-0-8-5-8"
        transform="translate(1022.9682,-537.08994)"
        style="fill:#666666"><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -919.6293,549.5858 -16.26447,17.05786 v 51.96694 l 16.26447,16.66115 9.52066,-13.0909 V 563.4701 Z"
            id="path1737-5-9-3-5-7-2-4" /><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -1009.6495,546.6106 17.05786,16.26447 h 51.96694 l 16.66115,-16.26447 -13.0909,-9.52066 h -58.71075 z"
            id="path1739-0-5-28-8-3-4-8" /><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -1009.7973,729.24824 17.05786,-16.26447 h 51.96694 l 16.66115,16.26447 -13.0909,9.52066 H -995.913 Z"
            id="path1741-7-3-7-8-0-8-8" /><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -919.6293,640.03208 -16.26447,17.05786 v 51.96694 l 16.26447,16.66115 9.52066,-13.0909 v -58.71075 z"
            id="path1743-76-6-2-3-4-7-6" /><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -1013.4475,549.38746 16.26448,17.05786 v 51.96694 l -16.26448,16.66115 -9.5207,-13.0909 v -58.71075 z"
            id="path1745-3-8-5-7-8-9-1" /><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -1013.4475,639.83374 16.26448,17.05786 v 51.96694 l -16.26448,16.66115 -9.5207,-13.0909 v -58.71075 z"
            id="path1747-75-7-4-3-0-7-5" /><path
            style="fill:#f9f9f9;fill-opacity:0.02"
            d="m -995.12077,625.66678 -13.74483,12.06172 13.60453,13.6045 h 56.9426 l 13.3941,-13.39412 -12.4124,-12.41235 z"
            id="path1749-7-0-1-6-0-0-94" /></g>
        </svg>`;

    static One = `<svg
        width="112.85956"
        height="201.67896"
        viewBox="0 0 112.85956 201.67896"
        version="1.1"
        id="svg5"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg"><defs
            id="defs2" /><g
            id="g1751-55"
            transform="translate(1022.9682,-537.08994)"
            style="fill:#666666"><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -919.6293,549.5858 -16.26447,17.05786 v 51.96694 l 16.26447,16.66115 9.52066,-13.0909 V 563.4701 Z"
            id="path1737-5" /><path
            style="fill:#f9f9f9;fill-opacity:0.02"
            d="m -1009.6495,546.6106 17.05786,16.26447 h 51.96694 l 16.66115,-16.26447 -13.0909,-9.52066 h -58.71075 z"
            id="path1739-0" /><path
            style="fill:#f9f9f9;fill-opacity:0.02"
            d="m -1009.7973,729.24824 17.05786,-16.26447 h 51.96694 l 16.66115,16.26447 -13.0909,9.52066 H -995.913 Z"
            id="path1741-7" /><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -919.6293,640.03208 -16.26447,17.05786 v 51.96694 l 16.26447,16.66115 9.52066,-13.0909 v -58.71075 z"
            id="path1743-76" /><path
            style="fill:#f9f9f9;fill-opacity:0.02"
            d="m -1013.4475,549.38746 16.26448,17.05786 v 51.96694 l -16.26448,16.66115 -9.5207,-13.0909 v -58.71075 z"
            id="path1745-3" /><path
            style="fill:#f9f9f9;fill-opacity:0.02"
            d="m -1013.4475,639.83374 16.26448,17.05786 v 51.96694 l -16.26448,16.66115 -9.5207,-13.0909 v -58.71075 z"
            id="path1747-75" /><path
            style="fill:#f9f9f9;fill-opacity:0.02"
            d="m -995.12077,625.66678 -13.74483,12.06172 13.60453,13.6045 h 56.9426 l 13.3941,-13.39412 -12.4124,-12.41235 z"
            id="path1749-7" /></g>
        </svg>`;
    
    static Two = `<svg
        width="112.85956"
        height="201.67896"
        viewBox="0 0 112.85956 201.67896"
        version="1.1"
        id="svg5"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg"><defs
        id="defs2" /><g
        id="g1751-55-8"
        transform="translate(1022.9682,-537.08994)"
        style="fill:#666666"><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -919.6293,549.5858 -16.26447,17.05786 v 51.96694 l 16.26447,16.66115 9.52066,-13.0909 V 563.4701 Z"
            id="path1737-5-9" /><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -1009.6495,546.6106 17.05786,16.26447 h 51.96694 l 16.66115,-16.26447 -13.0909,-9.52066 h -58.71075 z"
            id="path1739-0-5" /><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -1009.7973,729.24824 17.05786,-16.26447 h 51.96694 l 16.66115,16.26447 -13.0909,9.52066 H -995.913 Z"
            id="path1741-7-3" /><path
            style="fill:#f9f9f9;fill-opacity:0.02"
            d="m -919.6293,640.03208 -16.26447,17.05786 v 51.96694 l 16.26447,16.66115 9.52066,-13.0909 v -58.71075 z"
            id="path1743-76-6" /><path
            style="fill:#f9f9f9;fill-opacity:0.02"
            d="m -1013.4475,549.38746 16.26448,17.05786 v 51.96694 l -16.26448,16.66115 -9.5207,-13.0909 v -58.71075 z"
            id="path1745-3-8" /><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -1013.4475,639.83374 16.26448,17.05786 v 51.96694 l -16.26448,16.66115 -9.5207,-13.0909 v -58.71075 z"
            id="path1747-75-7" /><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -995.12077,625.66678 -13.74483,12.06172 13.60453,13.6045 h 56.9426 l 13.3941,-13.39412 -12.4124,-12.41235 z"
            id="path1749-7-0" /></g>
        </svg>`;

    static Three = `<svg
        width="112.8595"
        height="201.67896"
        viewBox="0 0 112.8595 201.67896"
        version="1.1"
        id="svg5"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg"><defs
        id="defs2" /><g
        id="g1751-55-8-6"
        transform="translate(1483.9111,-636.24627)"
        style="fill:#666666"><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -1380.5722,648.74213 -16.2645,17.05786 v 51.96694 l 16.2645,16.66115 9.5206,-13.0909 v -58.71075 z"
            id="path1737-5-9-5" /><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -1470.5924,645.76693 17.0578,16.26447 h 51.967 l 16.6611,-16.26447 -13.0909,-9.52066 h -58.7107 z"
            id="path1739-0-5-2" /><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -1470.7402,828.40457 17.0578,-16.26447 h 51.967 l 16.6611,16.26447 -13.0909,9.52066 h -58.7107 z"
            id="path1741-7-3-2" /><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -1380.5722,739.18841 -16.2645,17.05786 v 51.96694 l 16.2645,16.66115 9.5206,-13.0909 v -58.71075 z"
            id="path1743-76-6-7" /><path
            style="fill:#f9f9f9;fill-opacity:0.02"
            d="m -1474.3904,648.54379 16.2645,17.05786 v 51.96694 l -16.2645,16.66115 -9.5207,-13.0909 v -58.71075 z"
            id="path1745-3-8-3" /><path
            style="fill:#f9f9f9;fill-opacity:0.02"
            d="m -1474.3904,738.99007 16.2645,17.05786 v 51.96694 l -16.2645,16.66115 -9.5207,-13.0909 v -58.71075 z"
            id="path1747-75-7-1" /><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -1456.0637,724.82311 -13.7448,12.06172 13.6045,13.6045 h 56.9426 l 13.3941,-13.39412 -12.4124,-12.41235 z"
            id="path1749-7-0-6" /></g>
        </svg>`;

    static Four = `<svg
        width="112.85956"
        height="201.67896"
        viewBox="0 0 112.85956 201.67896"
        version="1.1"
        id="svg5"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg"><defs
        id="defs2" /><g
        id="g1751-55-8-4"
        transform="translate(1022.9682,-537.08994)"
        style="fill:#666666"><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -919.6293,549.5858 -16.26447,17.05786 v 51.96694 l 16.26447,16.66115 9.52066,-13.0909 V 563.4701 Z"
            id="path1737-5-9-3" /><path
            style="fill:#f9f9f9;fill-opacity:0.02"
            d="m -1009.6495,546.6106 17.05786,16.26447 h 51.96694 l 16.66115,-16.26447 -13.0909,-9.52066 h -58.71075 z"
            id="path1739-0-5-28" /><path
            style="fill:#f9f9f9;fill-opacity:0.02"
            d="m -1009.7973,729.24824 17.05786,-16.26447 h 51.96694 l 16.66115,16.26447 -13.0909,9.52066 H -995.913 Z"
            id="path1741-7-3-7" /><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -919.6293,640.03208 -16.26447,17.05786 v 51.96694 l 16.26447,16.66115 9.52066,-13.0909 v -58.71075 z"
            id="path1743-76-6-2" /><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -1013.4475,549.38746 16.26448,17.05786 v 51.96694 l -16.26448,16.66115 -9.5207,-13.0909 v -58.71075 z"
            id="path1745-3-8-5" /><path
            style="fill:#f9f9f9;fill-opacity:0.02"
            d="m -1013.4475,639.83374 16.26448,17.05786 v 51.96694 l -16.26448,16.66115 -9.5207,-13.0909 v -58.71075 z"
            id="path1747-75-7-4" /><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -995.12077,625.66678 -13.74483,12.06172 13.60453,13.6045 h 56.9426 l 13.3941,-13.39412 -12.4124,-12.41235 z"
            id="path1749-7-0-1" /></g>
        </svg>`;

    static Five = `<svg
        width="112.85956"
        height="201.67896"
        viewBox="0 0 112.85956 201.67896"
        version="1.1"
        id="svg5"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg"><defs
        id="defs2" /><g
        id="g1751-55-8-4-0"
        transform="translate(1022.9682,-537.08994)"
        style="fill:#666666"><path
            style="fill:#f9f9f9;fill-opacity:0.02"
            d="m -919.6293,549.5858 -16.26447,17.05786 v 51.96694 l 16.26447,16.66115 9.52066,-13.0909 V 563.4701 Z"
            id="path1737-5-9-3-5" /><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -1009.6495,546.6106 17.05786,16.26447 h 51.96694 l 16.66115,-16.26447 -13.0909,-9.52066 h -58.71075 z"
            id="path1739-0-5-28-8" /><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -1009.7973,729.24824 17.05786,-16.26447 h 51.96694 l 16.66115,16.26447 -13.0909,9.52066 H -995.913 Z"
            id="path1741-7-3-7-8" /><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -919.6293,640.03208 -16.26447,17.05786 v 51.96694 l 16.26447,16.66115 9.52066,-13.0909 v -58.71075 z"
            id="path1743-76-6-2-3" /><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -1013.4475,549.38746 16.26448,17.05786 v 51.96694 l -16.26448,16.66115 -9.5207,-13.0909 v -58.71075 z"
            id="path1745-3-8-5-7" /><path
            style="fill:#f9f9f9;fill-opacity:0.02"
            d="m -1013.4475,639.83374 16.26448,17.05786 v 51.96694 l -16.26448,16.66115 -9.5207,-13.0909 v -58.71075 z"
            id="path1747-75-7-4-3" /><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -995.12077,625.66678 -13.74483,12.06172 13.60453,13.6045 h 56.9426 l 13.3941,-13.39412 -12.4124,-12.41235 z"
            id="path1749-7-0-1-6" /></g>
        </svg>`;

    static Six = `<svg
        width="112.85956"
        height="201.67896"
        viewBox="0 0 112.85956 201.67896"
        version="1.1"
        id="svg5"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg"><defs
        id="defs2" /><g
        id="g1751-55-8-4-0-8"
        transform="translate(1022.9682,-537.08994)"
        style="fill:#666666"><path
            style="fill:#f9f9f9;fill-opacity:0.02"
            d="m -919.6293,549.5858 -16.26447,17.05786 v 51.96694 l 16.26447,16.66115 9.52066,-13.0909 V 563.4701 Z"
            id="path1737-5-9-3-5-7" /><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -1009.6495,546.6106 17.05786,16.26447 h 51.96694 l 16.66115,-16.26447 -13.0909,-9.52066 h -58.71075 z"
            id="path1739-0-5-28-8-3" /><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -1009.7973,729.24824 17.05786,-16.26447 h 51.96694 l 16.66115,16.26447 -13.0909,9.52066 H -995.913 Z"
            id="path1741-7-3-7-8-0" /><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -919.6293,640.03208 -16.26447,17.05786 v 51.96694 l 16.26447,16.66115 9.52066,-13.0909 v -58.71075 z"
            id="path1743-76-6-2-3-4" /><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -1013.4475,549.38746 16.26448,17.05786 v 51.96694 l -16.26448,16.66115 -9.5207,-13.0909 v -58.71075 z"
            id="path1745-3-8-5-7-8" /><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -1013.4475,639.83374 16.26448,17.05786 v 51.96694 l -16.26448,16.66115 -9.5207,-13.0909 v -58.71075 z"
            id="path1747-75-7-4-3-0" /><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -995.12077,625.66678 -13.74483,12.06172 13.60453,13.6045 h 56.9426 l 13.3941,-13.39412 -12.4124,-12.41235 z"
            id="path1749-7-0-1-6-0" /></g>
        </svg>`;

    static Seven = `<svg
        width="112.85956"
        height="201.67896"
        viewBox="0 0 112.85956 201.67896"
        version="1.1"
        id="svg5"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg"><defs
        id="defs2" /><g
        id="g1751-55-8-4-0-8-5"
        transform="translate(1022.9682,-537.08994)"
        style="fill:#666666"><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -919.6293,549.5858 -16.26447,17.05786 v 51.96694 l 16.26447,16.66115 9.52066,-13.0909 V 563.4701 Z"
            id="path1737-5-9-3-5-7-2" /><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -1009.6495,546.6106 17.05786,16.26447 h 51.96694 l 16.66115,-16.26447 -13.0909,-9.52066 h -58.71075 z"
            id="path1739-0-5-28-8-3-4" /><path
            style="fill:#f9f9f9;fill-opacity:0.02"
            d="m -1009.7973,729.24824 17.05786,-16.26447 h 51.96694 l 16.66115,16.26447 -13.0909,9.52066 H -995.913 Z"
            id="path1741-7-3-7-8-0-8" /><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -919.6293,640.03208 -16.26447,17.05786 v 51.96694 l 16.26447,16.66115 9.52066,-13.0909 v -58.71075 z"
            id="path1743-76-6-2-3-4-7" /><path
            style="fill:#f9f9f9;fill-opacity:0.02"
            d="m -1013.4475,549.38746 16.26448,17.05786 v 51.96694 l -16.26448,16.66115 -9.5207,-13.0909 v -58.71075 z"
            id="path1745-3-8-5-7-8-9" /><path
            style="fill:#f9f9f9;fill-opacity:0.02"
            d="m -1013.4475,639.83374 16.26448,17.05786 v 51.96694 l -16.26448,16.66115 -9.5207,-13.0909 v -58.71075 z"
            id="path1747-75-7-4-3-0-7" /><path
            style="fill:#f9f9f9;fill-opacity:0.02"
            d="m -995.12077,625.66678 -13.74483,12.06172 13.60453,13.6045 h 56.9426 l 13.3941,-13.39412 -12.4124,-12.41235 z"
            id="path1749-7-0-1-6-0-0" /></g>
        </svg>`;

    static Eight = `<svg
        width="112.85956"
        height="201.67896"
        viewBox="0 0 112.85956 201.67896"
        version="1.1"
        id="svg5"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg"><defs
        id="defs2" /><g
        id="g1751-55-8-4-0-8-5-5"
        transform="translate(1022.9682,-537.08994)"
        style="fill:#666666"><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -919.6293,549.5858 -16.26447,17.05786 v 51.96694 l 16.26447,16.66115 9.52066,-13.0909 V 563.4701 Z"
            id="path1737-5-9-3-5-7-2-7" /><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -1009.6495,546.6106 17.05786,16.26447 h 51.96694 l 16.66115,-16.26447 -13.0909,-9.52066 h -58.71075 z"
            id="path1739-0-5-28-8-3-4-1" /><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -1009.7973,729.24824 17.05786,-16.26447 h 51.96694 l 16.66115,16.26447 -13.0909,9.52066 H -995.913 Z"
            id="path1741-7-3-7-8-0-8-9" /><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -919.6293,640.03208 -16.26447,17.05786 v 51.96694 l 16.26447,16.66115 9.52066,-13.0909 v -58.71075 z"
            id="path1743-76-6-2-3-4-7-0" /><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -1013.4475,549.38746 16.26448,17.05786 v 51.96694 l -16.26448,16.66115 -9.5207,-13.0909 v -58.71075 z"
            id="path1745-3-8-5-7-8-9-6" /><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -1013.4475,639.83374 16.26448,17.05786 v 51.96694 l -16.26448,16.66115 -9.5207,-13.0909 v -58.71075 z"
            id="path1747-75-7-4-3-0-7-7" /><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -995.12077,625.66678 -13.74483,12.06172 13.60453,13.6045 h 56.9426 l 13.3941,-13.39412 -12.4124,-12.41235 z"
            id="path1749-7-0-1-6-0-0-2" /></g>
        </svg>`;

    static Nine = `<svg
        width="112.85956"
        height="201.67896"
        viewBox="0 0 112.85956 201.67896"
        version="1.1"
        id="svg5"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg"><defs
        id="defs2" /><g
        id="g1751-55-8-4-0-8-5-3"
        transform="translate(1022.9682,-537.08994)"
        style="fill:#666666"><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -919.6293,549.5858 -16.26447,17.05786 v 51.96694 l 16.26447,16.66115 9.52066,-13.0909 V 563.4701 Z"
            id="path1737-5-9-3-5-7-2-3" /><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -1009.6495,546.6106 17.05786,16.26447 h 51.96694 l 16.66115,-16.26447 -13.0909,-9.52066 h -58.71075 z"
            id="path1739-0-5-28-8-3-4-5" /><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -1009.7973,729.24824 17.05786,-16.26447 h 51.96694 l 16.66115,16.26447 -13.0909,9.52066 H -995.913 Z"
            id="path1741-7-3-7-8-0-8-5" /><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -919.6293,640.03208 -16.26447,17.05786 v 51.96694 l 16.26447,16.66115 9.52066,-13.0909 v -58.71075 z"
            id="path1743-76-6-2-3-4-7-3" /><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -1013.4475,549.38746 16.26448,17.05786 v 51.96694 l -16.26448,16.66115 -9.5207,-13.0909 v -58.71075 z"
            id="path1745-3-8-5-7-8-9-7" /><path
            style="fill:#f9f9f9;fill-opacity:0.02"
            d="m -1013.4475,639.83374 16.26448,17.05786 v 51.96694 l -16.26448,16.66115 -9.5207,-13.0909 v -58.71075 z"
            id="path1747-75-7-4-3-0-7-9" /><path
            style="fill:#f9f9f9;fill-opacity:1"
            d="m -995.12077,625.66678 -13.74483,12.06172 13.60453,13.6045 h 56.9426 l 13.3941,-13.39412 -12.4124,-12.41235 z"
            id="path1749-7-0-1-6-0-0-9" /></g>
        </svg>`;
}