export default {
  async afterCreate(event) {
    const { result } = event;
    console.log('Form submission created:', result);
    
    try {
      // Professional email template with modern styling
      const emailTemplate = {
        subject: 'New Form Submission - <%= submission.firstName %> <%= submission.lastName %>',
        text: `
New Form Submission Received

ID: <%= submission.id %>
Date: <%= submission.createdAt %>
Name: <%= submission.firstName %> <%= submission.lastName %>
Email: <%= submission.Email %>
Function: <%= submission.Function %>
Company: <%= submission.company %>
Phone: <%= submission.Phone %>
Message: <%= submission.descriptiveText %>
Document: <%= submission.documentInfo %>
        `,
        html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 300; letter-spacing: 1px;">
                New Form Submission
            </h1>
            <p style="color: #e0e6ff; margin: 10px 0 0 0; font-size: 16px;">
                You have received a new contact form submission
            </p>
        </div>
        
        <!-- Content -->
        <div style="padding: 40px 30px;">
            
            <!-- Submission Info Card -->
            <div style="background-color: #f8f9ff; border-left: 4px solid #667eea; padding: 20px; margin-bottom: 30px; border-radius: 0 8px 8px 0;">
                <h2 style="color: #333333; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">
                    Submission Details
                </h2>
                <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                    <span style="color: #666666; font-weight: 500;">ID:</span>
                    <span style="color: #333333; font-weight: 600;"><%= submission.id %></span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span style="color: #666666; font-weight: 500;">Date:</span>
                    <span style="color: #333333;"><%= submission.createdAt %></span>
                </div>
            </div>
            
            <!-- Contact Information -->
            <div style="margin-bottom: 30px;">
                <h2 style="color: #333333; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; border-bottom: 2px solid #eef1ff; padding-bottom: 10px;">
                    Contact Information
                </h2>
                
                <div style="display: grid; grid-template-columns: 1fr; gap: 15px;">
                    <div style="background-color: #ffffff; border: 1px solid #e1e5e9; border-radius: 8px; padding: 15px;">
                        <div style="display: flex; align-items: center; margin-bottom: 8px;">
                            <div style="width: 8px; height: 8px; background-color: #667eea; border-radius: 50%; margin-right: 10px;"></div>
                            <span style="color: #666666; font-weight: 500; font-size: 14px;">FULL NAME</span>
                        </div>
                        <div style="color: #333333; font-size: 16px; font-weight: 600;">
                            <%= submission.firstName %> <%= submission.lastName %>
                        </div>
                    </div>
                    
                    <div style="background-color: #ffffff; border: 1px solid #e1e5e9; border-radius: 8px; padding: 15px;">
                        <div style="display: flex; align-items: center; margin-bottom: 8px;">
                            <div style="width: 8px; height: 8px; background-color: #667eea; border-radius: 50%; margin-right: 10px;"></div>
                            <span style="color: #666666; font-weight: 500; font-size: 14px;">EMAIL</span>
                        </div>
                        <div style="color: #333333; font-size: 16px;">
                            <a href="mailto:<%= submission.Email %>" style="color: #667eea; text-decoration: none;">
                                <%= submission.Email %>
                            </a>
                        </div>
                    </div>
                    
                    <div style="background-color: #ffffff; border: 1px solid #e1e5e9; border-radius: 8px; padding: 15px;">
                        <div style="display: flex; align-items: center; margin-bottom: 8px;">
                            <div style="width: 8px; height: 8px; background-color: #667eea; border-radius: 50%; margin-right: 10px;"></div>
                            <span style="color: #666666; font-weight: 500; font-size: 14px;">PHONE</span>
                        </div>
                        <div style="color: #333333; font-size: 16px;">
                            <a href="tel:<%= submission.Phone %>" style="color: #667eea; text-decoration: none;">
                                <%= submission.Phone %>
                            </a>
                        </div>
                    </div>
                    
                    <div style="background-color: #ffffff; border: 1px solid #e1e5e9; border-radius: 8px; padding: 15px;">
                        <div style="display: flex; align-items: center; margin-bottom: 8px;">
                            <div style="width: 8px; height: 8px; background-color: #667eea; border-radius: 50%; margin-right: 10px;"></div>
                            <span style="color: #666666; font-weight: 500; font-size: 14px;">COMPANY</span>
                        </div>
                        <div style="color: #333333; font-size: 16px; font-weight: 600;">
                            <%= submission.company %>
                        </div>
                    </div>
                    
                    <div style="background-color: #ffffff; border: 1px solid #e1e5e9; border-radius: 8px; padding: 15px;">
                        <div style="display: flex; align-items: center; margin-bottom: 8px;">
                            <div style="width: 8px; height: 8px; background-color: #667eea; border-radius: 50%; margin-right: 10px;"></div>
                            <span style="color: #666666; font-weight: 500; font-size: 14px;">FUNCTION</span>
                        </div>
                        <div style="color: #333333; font-size: 16px;">
                            <%= submission.Function %>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Message -->
            <div style="margin-bottom: 30px;">
                <h2 style="color: #333333; margin: 0 0 15px 0; font-size: 18px; font-weight: 600; border-bottom: 2px solid #eef1ff; padding-bottom: 10px;">
                    Message
                </h2>
                <div style="background-color: #f8f9ff; border-radius: 8px; padding: 20px; border-left: 4px solid #667eea;">
                    <p style="color: #333333; line-height: 1.6; margin: 0; font-size: 15px;">
                        <%= submission.descriptiveText %>
                    </p>
                </div>
            </div>
            
            <!-- Document Attachment -->
            <% if (submission.attachDocument) { %>
            <div style="margin-bottom: 30px;">
                <h2 style="color: #333333; margin: 0 0 15px 0; font-size: 18px; font-weight: 600; border-bottom: 2px solid #eef1ff; padding-bottom: 10px;">
                    Attached Document
                </h2>
                <div style="background-color: #e8f5e8; border: 1px solid #c3e6c3; border-radius: 8px; padding: 20px; text-align: center;">
                    <div style="margin-bottom: 15px;">
                        <span style="font-size: 24px;">📎</span>
                    </div>
                    <a href="<%= submission.documentUrl %>" 
                       style="display: inline-block; background-color: #28a745; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">
                        Download Document
                    </a>
                </div>
            </div>
            <% } else { %>
            <div style="margin-bottom: 30px;">
                <h2 style="color: #333333; margin: 0 0 15px 0; font-size: 18px; font-weight: 600; border-bottom: 2px solid #eef1ff; padding-bottom: 10px;">
                    Attached Document
                </h2>
                <div style="background-color: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 20px; text-align: center; color: #6c757d;">
                    <span style="font-size: 24px; margin-bottom: 10px; display: block;">📄</span>
                    <p style="margin: 0; font-style: italic;">No document was attached to this submission</p>
                </div>
            </div>
            <% } %>
            
        </div>
        
        <!-- Footer -->
        <div style="background-color: #f8f9ff; padding: 20px 30px; text-align: center; border-top: 1px solid #e1e5e9;">
            <p style="color: #666666; margin: 0; font-size: 14px;">
                This email was automatically generated from your website contact form.
            </p>
            <p style="color: #999999; margin: 5px 0 0 0; font-size: 12px;">
                Timestamp: <%= submission.createdAt %>
            </p>
        </div>
        
    </div>
</body>
</html>
        `
      };

      // Prepare template data
      const templateData = {
        submission: {
          id: result.id,
          createdAt: new Date(result.createdAt).toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short'
          }),
          firstName: result.firstName || 'N/A',
          lastName: result.lastName || 'N/A',
          Email: result.Email || 'N/A',
          Function: result.Function || 'N/A',
          company: result.company || 'N/A',
          Phone: result.Phone || 'N/A',
          descriptiveText: result.descriptiveText || 'No message provided',
          attachDocument: result.attachDocument,
          documentUrl: result.attachDocument ? 
            `${process.env.STRAPI_URL || 'http://localhost:1337'}${result.attachDocument.url}` : 
            null,
          documentInfo: result.attachDocument ? 
            `${process.env.STRAPI_URL || 'http://localhost:1337'}${result.attachDocument.url}` : 
            'No document attached'
        }
      };

      // Send templated email
      await strapi.plugins['email'].services.email.sendTemplatedEmail(
        {
          to: 'learnvue3@gmail.com',
          from: 'learnvue3@gmail.com',
        },
        emailTemplate,
        templateData
      );
      
      console.log('Templated email sent successfully');
    } catch (error) {
      console.error('Error sending templated email:', error.message);
      console.error('Full error:', error);
    }
  }
};