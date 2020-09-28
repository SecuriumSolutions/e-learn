/**
 *  @fileoverview controller to get  Admin full Access
 * @author nitin@securiumsolutions.com (Nitin Kumar)
 * @created on 19/9/20
 * @company securiumsolutions
 */


const dao = require ('../../Dao/adminDao.js');

const userInformation = async function (request, response){
    let allInfo = request.query;
    if(!allInfo.userId || !allInfo.courseId ||  !allInfo.billdetailsId || !allInfo.paymentdetailsId || !allInfo. purchaseId || !allInfo.date )
        {
            console.log('body parameters missing');
            return response.params_missing();
        }
        const getAllInfo = await dao.find(allInfo);
        if(getAllInfo){
            return response.status(302).success('sucessfuly find a user');
        }return response.status(404).send('not found');
};



module.exports = { userInformation}

//ye abhi complete nai hui hah under progress
