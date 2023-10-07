
import PhonesCard from "./PhonesCard";
import PropTypes from 'prop-types'

const Phones = ({phones}) => {



    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {
                phones?.map(phone => <PhonesCard key={phone.id} phone={phone}></PhonesCard>)
            }
        </div>
    );
};

Phones.propTypes  ={
    phones:PropTypes.array.isRequired,
}

export default Phones;