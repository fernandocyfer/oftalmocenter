import styles from "../../styles/conveniosContainer.module.sass";
import CardConvenio from "../Cards/CardConvenio";


const ConveniosContainer=({
    listConvenios=[1,2,3,4,5,6,7,8,9,10,11,12],
}) => {
    return (
        <>
            <div className={styles.ConveniosContainer}>
                {
                    listConvenios.map((item,index) => {
                        return (
                            <CardConvenio key={index} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default ConveniosContainer