import React from 'react'

class CalenderSettingsModal extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            workStart: 8,
            workEnd: '',
            workDays:[],

        }
    }

    handleCheckboxChange = event => {
        let newArray = [...this.state.workDays, event.target.id];
        if (this.state.workDays.includes(event.target.id)) {
          newArray = newArray.filter(day => day !== event.target.id);
        } 
        this.setState({
          workDays: newArray
        });
    };

    render() {


        return (
            <>
            <form>
                <div>
                    <h5>Select your workday(s):</h5>
                    <div class="custom-control custom-checkbox " >
                        <input type="checkbox" class="custom-control-input" id="monday" value="monday"  onChange={this.handleCheckboxChange}/>
                        <label class="custom-control-label" for="monday">Monday</label>

                    </div>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="tuesday" value="tuesday" onChange={ this.handleCheckboxChange}/>
                        <label class="custom-control-label" for="tuesday">Tuesday</label>

                    </div>
                    </div>
            </form>
                <button >Save settings</button>



            </>

        );
    }
}

export default CalenderSettingsModal;