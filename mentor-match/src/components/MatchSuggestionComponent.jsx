import React, { useState, useEffect } from 'react';
import Header from './Headers/HeaderComponent';

function MatchSuggestion() {

    return (
        <Header>
            <div>
                <p className="warning-msg"></p>
                <div>
                    {/* map with selected mentors */}
                </div>
                <div>
                    {/* map with all available mentors */}
                </div>
                <button>Confirm</button>
            </div>
        </Header>
    )
}

export default MatchSuggestion;