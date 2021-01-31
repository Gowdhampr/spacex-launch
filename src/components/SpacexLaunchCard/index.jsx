import React from 'react'
import Card from "../Core/Card";

const SpacexLaunchCard = ({data}) => {
    return (
        <Card>
            <div className="imageContainer">
                {data.links.mission_patch_small
                    && (
                        <img
                        src={data.links.mission_patch}
                        alt={data.mission_name}
                        width={160}
                        height={160}
                        />
                    )}
            </div>
            <div className="cardTitle">
                <span><strong>{data.mission_name} #{data.flight_number}</strong></span>
            </div>
            <b>Mission Ids: </b>
            <span>
                {data.mission_id.length
                    ? (
                        <ul>
                        {data.mission_id.map((missionId) => <li key={missionId}>{missionId}</li>)}
                        </ul>
                    ) : ''}
            </span>
            <p>
                <b>Launch year: </b>
            <span>{data.launch_year}</span>
            </p>
            <p>
                <b>Successful launch: </b>
                <span>{String(data.launch_success)}</span>
            </p>
            <p>
                <b>Successful Landing: </b>
                <span>
                    {
                        data.rocket.first_stage.cores[0].land_success !== null
                        && String(data.rocket.first_stage.cores[0].land_success)
                    }
                </span>
            </p>
        </Card>
    )
}

export default SpacexLaunchCard