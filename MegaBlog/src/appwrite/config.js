import conf from '../conf/conf.js';
import { Client, Databases, Storage,Query } from 'appwrite';


export class Service{
    client = new Client();
    databases;
    storage;


    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl) // Your Appwrite Endpoint
            .setProject(conf.appwriteProjectId); // Your project ID

        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({title,slug,content,featuresImage,status,userId}){
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, // Use slug as the document ID for uniqueness
                {
                    title,
                    content,
                    featuresImage,
                    status,
                    userId
                },
                //[Query.equal('slug', slug)] // Ensure unique slug
            )
        }catch (error) {
            console.error('Error creating post:', error);
            throw error;
        }
    }

    async updatePost(slug , {title,content,featuresImage,status}){
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, // Use slug as the document ID for uniqueness
                {
                    title,
                    content,
                    featuresImage,
                    status,
                
                }
            )
        }catch (error) {
            console.error('Error updating post:', error);
            throw error;
        }
    }

    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug // Use slug as the document ID for uniqueness
            )
            return true;
        }catch (error) {
            console.error('Error deleting post:', error);
            return false;
        }
    }

    async getPost(slug){
        try{
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug // Use slug as the document ID for uniqueness
            )
        }catch (error) {
            console.error('Error fetching post:', error);
            return false;
        }
    }

    //get the list of posts which are active
    async getPosts(queries = [Query.equal("status","active")]){
        try{
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        }catch (error) {
            console.error('Error fetching posts:', error);
            return false;
        }
    }

    // file upload Service
    async uploadFile(file) {
        try {
            const response = await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(), // Generate a unique ID for the file
                file
            );
            return response;
        } catch (error) {
            console.error('Error uploading file:', error);
            throw error;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            );
            return true;
        } catch (error) {
            console.error('Error deleting file:', error);
            return false;
        }
    }

    getFilePreview(fileId) {
        try {
            return this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId
            );
        } catch (error) {
            console.error('Error getting file preview:', error);
            return null;
        }
    }
}

const service = new Service();

export default service;