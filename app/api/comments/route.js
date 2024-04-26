import comments from "@/app/data/comments"
export  async function GET() {
    return Response.json(comments)
}
export  async function POST(request) {
    const comment =await request.json();
    const newComment = {
        id:comments.length +1,
        text:comment.text
    }
    comments.push(newComment)
    return new Response(JSON.stringify(newComment),{
        status:201,
        headers:{
            "Content-Type":"application/json"
        }
    })
}