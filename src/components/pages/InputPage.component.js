import React from 'react';
// MobX
import { observable } from "mobx";
import { observer } from "mobx-react";


class InputPage extends React.Component {

    inputValue = observable.box("");

    inputRef = React.createRef();

    prefix = "+1";

    symbolsLimit = 10;


    get clearInputValue() { return this.removePrefix(this.inputValue.get()); };


    removeNonNumbers(str="") { return str.replace(/[^0-9]/g, ""); };

    removePrefix(str="") { return str.replace(/^\+1{1}/g, ""); };

    getSpaces(count=0) { return Array.from(Array(count)).map(()=>" ").join(''); };


    onInputChange = e => {
        const newValue = this.removeNonNumbers(e.target.value);

        if(!newValue) return this.inputValue.set("");
        if(/^\([0-9\s]{1,3}\)$/.test(e.target.value)) return this.inputValue.set(this.prefix + newValue.substring(0, newValue.length));
        this.inputValue.set(this.prefix + newValue);
    };


    validate = str => {
        str = this.removePrefix(str);

        if(str.length > this.symbolsLimit) return str;

        let countryCode = str.substring(0, 3);
        const countryCodeSpacesLength = countryCode ? 3 - countryCode.length : 0;
        countryCode = countryCode ? `(${countryCode}${this.getSpaces(countryCodeSpacesLength)})` : "";

        const firstPart = str.substring(3, 6) ? ` ${str.substring(3, 6)}` : "";
        const secondPart = str.substring(6, 10) ? `-${str.substring(6, 10)}` : "";

        return `${countryCode}${firstPart}${secondPart}`;
    };


    onKeyUp = ()=> {
        if(this.clearInputValue.length > 3 ) return;

        const countryCodeSpacesLength = this.clearInputValue.length + 1;

        this.inputRef.current.setSelectionRange(countryCodeSpacesLength, countryCodeSpacesLength);
    };


    render() {
        return (
            <div>
                <input type="text"
                       placeholder="Enter phone number"
                       ref={ this.inputRef }
                       onChange={ this.onInputChange }
                       onKeyUp={ this.onKeyUp }
                       value={ this.validate(this.inputValue.get()) } />
                <br/>
                <br/>
                Value: { this.inputValue.get() }
            </div>
        );
    }
}


export default observer(InputPage);
