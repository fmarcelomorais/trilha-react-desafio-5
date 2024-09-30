import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://mydkvqwobexvhliaqybz.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15ZGt2cXdvYmV4dmhsaWFxeWJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc2NTM5NzIsImV4cCI6MjA0MzIyOTk3Mn0.rbAMLuJkdK7bL1w3YHG2SZli2lAcGOS0cIS4IhDubyk",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15ZGt2cXdvYmV4dmhsaWFxeWJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc2NTM5NzIsImV4cCI6MjA0MzIyOTk3Mn0.rbAMLuJkdK7bL1w3YHG2SZli2lAcGOS0cIS4IhDubyk"
    }
})