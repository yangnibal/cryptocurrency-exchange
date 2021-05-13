import React, { useState } from 'react'
import Layout from '../../../components/Layout'
import styles from './style.module.scss'
import AddIcon from '../../../assets/plus.svg'
import GroupContent from '../../../components/GroupContent'

const Groups = () => {

    const [ groups, setGroups ] = useState<any>(['asdf'])

    return (
        <Layout>
            <div className={styles.container}>
                {groups.length ? (
                    <div className={styles.wrapper}>
                        <div className={styles.listWrapper}>
                            <div className={styles.title}>Groups</div>
                            <div className={styles.searchInputWrapper}>
                                <input className={styles.searchInput} placeholder="search..."/>
                            </div>
                            <div className={styles.groupListWrapper}>
                                <GroupContent content="AasdFads" isSelected/>
                                <GroupContent content="testg" isSelected={false}/>
                                <GroupContent content="sdihf" isSelected={false}/>
                                <GroupContent content="mkso,md" isSelected={false}/>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={styles.noContent}>
                        <div className={styles.noContentTitle}>You have no groups yet.</div>
                        <div className={styles.noContentDescription}>Add a groups and try the service.</div>
                        <div className={styles.addIconWrapper}>
                            <img className={styles.addIcon} src={AddIcon} alt="add"/>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    )
}

export default Groups