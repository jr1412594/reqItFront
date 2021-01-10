import React, {useEffect} from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import OpenIssueCard from './OpenIssueCard' 
import { HOST_WITH_PORT } from '../environment';


export default function OpenIssues() {
    const dispatch = useDispatch()
    const issues = useSelector(state => state.issues)

    useEffect(() => {
        fetch(`${HOST_WITH_PORT}/issues`)
        .then(response => response.json())
        .then((issues) => dispatch({ type: 'ISSUE_IMAGES', issues: issues}))
        .catch(error => console.log(error))
    }, []); 

    const showIssues = () => issues.map(issue => {
        return (
            <OpenIssueCard key={issue.id} issue={issue}/>
        )
    })
    
    return (
        <View style={styles.openIssuesContainer}>
            <ScrollView>
                {showIssues()}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    openIssuesContainer: {
        flex: 1,
        backgroundColor: '#f7fdfc',

    }
})
