// Facebook Conversions API Integration
const FB_ACCESS_TOKEN = 'EAAT26bj1waMBP5rZCBRXZCvghDIAiQLxylgpt7knw4xs7xgSk6x7rFi1jbB6iQVQ55ZCclcwrzQ9ZAED2DognlzbZAzHO1MOgyUKEzXNs6MkeV8mPuxj3YzSOUYzyxWJpnLBmfPad1yTEG9uMmJmSdMpu9chJ55LfZBF3wbrZBFkhHC33P8AIDoQkuZA2F6r4AZDZD';
const FB_PIXEL_ID = 'YOUR_PIXEL_ID'; // Replace with your Facebook Pixel ID
const FB_API_VERSION = 'v18.0';

// Hash function for user data (required by Facebook)
async function sha256(message: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

// Normalize and hash user data
async function hashUserData(value: string): Promise<string> {
  if (!value) return '';
  // Normalize: lowercase and trim
  const normalized = value.toLowerCase().trim();
  return await sha256(normalized);
}

interface PurchaseEventData {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  city?: string;
  currency?: string;
  value?: number;
  eventSourceUrl?: string;
}

export async function sendFacebookPurchaseEvent(data: PurchaseEventData): Promise<void> {
  try {
    const eventTime = Math.floor(Date.now() / 1000);
    const eventId = `order_${eventTime}_${Math.random().toString(36).substr(2, 9)}`;

    // Hash user data
    const userData: any = {
      client_user_agent: navigator.userAgent, // Do not hash
    };

    if (data.email) {
      userData.em = [await hashUserData(data.email)];
    }

    if (data.phone) {
      // Remove spaces and special characters from phone
      const cleanPhone = data.phone.replace(/[\s\-\(\)]/g, '');
      userData.ph = [await hashUserData(cleanPhone)];
    }

    if (data.firstName) {
      userData.fn = [await hashUserData(data.firstName)];
    }

    if (data.lastName) {
      userData.ln = [await hashUserData(data.lastName)];
    }

    if (data.city) {
      userData.ct = [await hashUserData(data.city)];
    }

    // Build payload
    const payload = {
      data: [
        {
          event_name: 'Purchase',
          event_time: eventTime,
          event_id: eventId, // For deduplication with Meta Pixel
          action_source: 'website',
          event_source_url: data.eventSourceUrl || window.location.href,
          user_data: userData,
          custom_data: {
            currency: data.currency || 'MAD',
            value: data.value || 0,
            content_type: 'product',
            content_name: 'Meuble MDF',
          },
        },
      ],
    };

    // Send to Facebook Conversions API
    const url = `https://graph.facebook.com/${FB_API_VERSION}/${FB_PIXEL_ID}/events?access_token=${FB_ACCESS_TOKEN}`;

    console.log('📊 Sending Facebook Conversion Event:', {
      event_name: 'Purchase',
      event_id: eventId,
      value: data.value,
    });

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      const result = await response.json();
      console.log('✅ Facebook Conversion Event sent successfully:', result);
    } else {
      const error = await response.text();
      console.error('❌ Facebook Conversion API Error:', error);
    }
  } catch (error) {
    console.error('❌ Error sending Facebook Conversion Event:', error);
    // Don't throw - we don't want to break the order flow if FB tracking fails
  }
}

// Optional: Send other events
export async function sendFacebookEvent(
  eventName: string,
  customData?: Record<string, any>,
  userData?: PurchaseEventData
): Promise<void> {
  try {
    const eventTime = Math.floor(Date.now() / 1000);
    const eventId = `${eventName.toLowerCase()}_${eventTime}_${Math.random().toString(36).substr(2, 9)}`;

    const hashedUserData: any = {
      client_user_agent: navigator.userAgent,
    };

    if (userData?.email) {
      hashedUserData.em = [await hashUserData(userData.email)];
    }

    if (userData?.phone) {
      const cleanPhone = userData.phone.replace(/[\s\-\(\)]/g, '');
      hashedUserData.ph = [await hashUserData(cleanPhone)];
    }

    const payload = {
      data: [
        {
          event_name: eventName,
          event_time: eventTime,
          event_id: eventId,
          action_source: 'website',
          event_source_url: window.location.href,
          user_data: hashedUserData,
          custom_data: customData || {},
        },
      ],
    };

    const url = `https://graph.facebook.com/${FB_API_VERSION}/${FB_PIXEL_ID}/events?access_token=${FB_ACCESS_TOKEN}`;

    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    console.log(`✅ Facebook Event "${eventName}" sent successfully`);
  } catch (error) {
    console.error(`❌ Error sending Facebook Event "${eventName}":`, error);
  }
}
