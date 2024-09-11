const mongoose = require('mongoose');
const feed_posts = mongoose.model('FeedPosts', {}, 'feed_posts')


exports.getdata = async (req, res, next) => {
    
    const id = req.params.id;
    if(id) {
        let data = await feed_posts.find({ owner_id: id })
        if(data) {
            return res.status(200).json({
                status: true,
                data
            });
        } else {
            return res.status(500).json({
                status: false,
                message: 'Data Not Found'
            });
        }    
    } else {
        let data = await feed_posts.find();
        if(data) {
            return res.status(200).json({
                status: true,
                data
            });
        } else {
            return res.status(500).json({
                status: false,
                message: 'Data Not Found'
            });
        }  
    }
    
}
