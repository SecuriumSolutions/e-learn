const { query } = require('express');
/**
 *  @fileoverview get profiles modules 
 * @author nitin@securiumsolutions.com (Nitin Kumar)
 * @created on 21/9/20
 * @company securiumsolutions
 */
const dao = require ('../../Dao/userDao.js');

const getUserProfiles = async function (request, response){
    let userId = request.query;
    let userInfo =[];
    if(!userId) {
        return response.status(400).send('Not found');
    };
    const getUser = await dao.find({_Id: userId});
    if(getUser){
        return response.status(302).success('sucessfuly find a user');
    }return response.status(404).send('not found');
} ;

module.exports={getUserProfiles}